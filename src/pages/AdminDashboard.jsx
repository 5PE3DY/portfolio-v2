import React, { useState, useEffect } from "react";
import { db, auth, storage } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [project, setProject] = useState({
    title: "",
    desc: "",
    tech: "",
    image: "",
    link: "",
    tag: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => setUser(u));
    const q = collection(db, "projects");
    const unsubscribeProjects = onSnapshot(
      q,
      (s) => {
        setProjects(s.docs.map((d) => ({ ...d.data(), id: d.id })));
      },
      (err) => console.error("Firestore error:", err),
    );
    return () => {
      unsubscribeAuth();
      unsubscribeProjects();
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Systeem bijwerken...");
    try {
      let finalImageUrl = project.image;
      if (imageFile) {
        const fileRef = ref(
          storage,
          `projects/${Date.now()}_${imageFile.name}`,
        );
        const uploadResult = await uploadBytes(fileRef, imageFile);
        finalImageUrl = await getDownloadURL(uploadResult.ref);
      }

      const projectData = { ...project, image: finalImageUrl };

      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), projectData);
        setStatus("✅ Project succesvol bijgewerkt!");
      } else {
        await addDoc(collection(db, "projects"), {
          ...projectData,
          createdAt: serverTimestamp(),
        });
        setStatus("✅ Project succesvol gepubliceerd!");
      }

      setProject({
        title: "",
        desc: "",
        tech: "",
        image: "",
        link: "",
        tag: "",
      });
      setImageFile(null);
      setImagePreview(null);
      setEditingId(null);
      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error("Opslaan mislukt:", err);
      setStatus("❌ Fout bij opslaan.");
    }
    setLoading(false);
  };

  const deleteProject = async (id) => {
    if (window.confirm("Project definitief verwijderen?")) {
      try {
        await deleteDoc(doc(db, "projects", id));
        setStatus("✅ Verwijderd.");
        setTimeout(() => setStatus(""), 3000);
      } catch (err) {
        console.error("Delete error:", err); // Hier wordt 'err' nu gebruikt!
        setStatus("❌ Verwijderen mislukt.");
      }
    }
  };

  if (!user) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-screen bg-[#0a0c10] flex items-center justify-center text-white">
        <div className="max-w-md w-full bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
          <h1 className="text-3xl font-black italic uppercase mb-8 text-center tracking-tighter text-white">
            ADMIN <span className="text-brand-blue text-glow">LOGIN</span>
          </h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                await signInWithEmailAndPassword(
                  auth,
                  loginData.email,
                  loginData.password,
                );
              } catch (err) {
                console.error(err);
                setStatus("❌ Login mislukt.");
              }
            }}
            className="space-y-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-blue text-white"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Wachtwoord"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-brand-blue text-white"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-black uppercase rounded-xl hover:bg-brand-blue hover:text-white transition-all"
            >
              Inloggen
            </button>
            {status && (
              <p className="text-center text-[10px] font-black uppercase text-brand-blue mt-4">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20 px-6 min-h-screen bg-[#0a0c10] text-white text-left">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative">
          <button
            onClick={() => signOut(auth)}
            className="absolute top-8 right-8 text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors"
          >
            Log uit
          </button>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-8 text-white">
            {editingId ? "Edit" : "Add"}{" "}
            <span className="text-brand-blue">Project</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue text-white"
                placeholder="Project Titel"
                value={project.title}
                onChange={(e) =>
                  setProject({ ...project, title: e.target.value })
                }
                required
              />
              <input
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue text-white"
                placeholder="Tag"
                value={project.tag}
                onChange={(e) =>
                  setProject({ ...project, tag: e.target.value })
                }
              />
            </div>

            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                Project Afbeelding
              </label>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/2 aspect-video bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative shadow-inner">
                  {imagePreview || project.image ? (
                    <img
                      src={imagePreview || project.image}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-600 text-[10px] uppercase font-black">
                      Geen afbeelding
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-brand-blue file:text-white hover:file:bg-white hover:file:text-black transition-all cursor-pointer"
                />
              </div>
            </div>

            <textarea
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none h-32 resize-none focus:border-brand-blue text-white"
              placeholder="Beschrijving"
              value={project.desc}
              onChange={(e) => setProject({ ...project, desc: e.target.value })}
              required
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue text-white"
              placeholder="Technieken"
              value={project.tech}
              onChange={(e) => setProject({ ...project, tech: e.target.value })}
            />
            <input
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue text-white"
              placeholder="Project Link"
              value={project.link}
              onChange={(e) => setProject({ ...project, link: e.target.value })}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-6 bg-white text-black font-black uppercase rounded-2xl hover:bg-brand-blue hover:text-white transition-all shadow-xl"
            >
              {loading ? "BEZIG..." : editingId ? "OPSLAAN" : "PUBLICEREN"}
            </button>
            {status && (
              <p className="text-center text-[10px] font-black uppercase text-brand-blue mt-4">
                {status}
              </p>
            )}
          </form>
        </div>

        <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
          <h2 className="text-2xl font-black italic uppercase mb-8 tracking-tighter text-white text-left">
            Manage <span className="text-brand-blue">Projects</span>
          </h2>
          <div className="space-y-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl group hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={p.image}
                    className="w-12 h-12 rounded-lg object-cover border border-white/10"
                    alt=""
                  />
                  <div className="text-left">
                    <h4 className="font-black italic uppercase text-sm text-white">
                      {p.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 uppercase mt-1 tracking-widest">
                      {p.tag || "Live"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setEditingId(p.id);
                      setProject(p);
                      setImagePreview(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-[10px] font-black uppercase text-brand-blue hover:text-white transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(p.id)}
                    className="text-[10px] font-black uppercase text-red-500 hover:text-white transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
