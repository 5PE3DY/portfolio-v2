import React, { useState, useEffect, useCallback } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [imgList, setImgList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [project, setProject] = useState({
    title: "",
    desc: "",
    tech: "",
    image: "",
    link: "",
    tag: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const fetchImagesFromServer = useCallback(async () => {
    try {
      const response = await fetch("/get_images.php");
      if (!response.ok) throw new Error("Localhost fallback");
      const data = await response.json();
      setImgList(data);
    } catch (err) {
      console.log("Local info:", err.message);
      setImgList([
        "/img/ezel-render.png",
        "/img/favicon_F.png",
        "/img/portfolio-preview.png",
      ]);
    }
  }, []);

  const fetchProjects = useCallback(async () => {
    if (!user) return;
    try {
      const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    } catch (err) {
      console.error("Firebase error:", err);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchProjects();
      fetchImagesFromServer();
    }
  }, [user, fetchProjects, fetchImagesFromServer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Processing...");

    const cleanData = {
      title: project.title || "Untitled",
      desc: project.desc || "",
      tech: project.tech || "",
      image: project.image || "/img/placeholder.png",
      link: project.link || "",
      tag: project.tag || "Web",
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), {
          ...cleanData,
          updatedAt: serverTimestamp(),
        });
        setStatus("✅ Project updated!");
      } else {
        await addDoc(collection(db, "projects"), {
          ...cleanData,
          createdAt: serverTimestamp(),
        });
        setStatus("✅ Project added!");
      }
      setProject({
        title: "",
        desc: "",
        tech: "",
        image: "",
        link: "",
        tag: "",
      });
      setEditingId(null);
      fetchProjects();
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (proj) => {
    setProject({
      title: proj.title || "",
      desc: proj.desc || "",
      tech: proj.tech || "",
      image: proj.image || "",
      link: proj.link || "",
      tag: proj.tag || "",
    });
    setEditingId(proj.id);
    window.scrollTo({ top: 80, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      try {
        await deleteDoc(doc(db, "projects", id));
        fetchProjects();
        setStatus("🗑️ Deleted.");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  };

  if (!user)
    return (
      <div className="p-10 text-center text-white font-bold uppercase tracking-widest">
        Loading...
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-28 mb-10 text-slate-900 border border-slate-200">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
        <h1 className="text-2xl font-black uppercase italic tracking-tighter">
          Admin <span className="text-blue-600">Panel</span>
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className={`w-8 h-8 rounded-full font-bold text-sm border transition-all ${showHelp ? "bg-blue-600 border-blue-600 text-white" : "text-slate-400 border-slate-200 hover:text-blue-600"}`}
          >
            {showHelp ? "×" : "i"}
          </button>
          <button
            onClick={() => signOut(auth)}
            className="bg-slate-900 text-white px-5 py-1.5 rounded-full font-bold hover:bg-red-600 transition-all text-[10px] uppercase tracking-wider"
          >
            Logout
          </button>
        </div>
      </div>

      {status && (
        <div
          className={`p-3 mb-6 rounded-lg text-xs font-bold border ${status.includes("✅") ? "bg-emerald-50 border-emerald-100 text-emerald-800" : "bg-blue-50 border-blue-100 text-blue-800"}`}
        >
          {status}
        </div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-slate-50 p-6 rounded-xl border border-slate-200"
      >
        <h2 className="text-lg font-black uppercase text-slate-800 italic">
          {editingId ? "📝 Edit Project" : "🚀 New Project"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              className="border border-slate-300 p-2.5 rounded-lg text-sm font-bold focus:border-blue-600 outline-none"
              value={project.title}
              onChange={(e) =>
                setProject({ ...project, title: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
              Tag
            </label>
            <input
              type="text"
              className="border border-slate-300 p-2.5 rounded-lg text-sm font-bold focus:border-blue-600 outline-none"
              value={project.tag}
              onChange={(e) => setProject({ ...project, tag: e.target.value })}
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-1">
              Image
            </label>
            <select
              className="border border-blue-200 bg-white p-2.5 rounded-lg text-sm font-bold focus:border-blue-600 outline-none"
              value={project.image}
              onChange={(e) =>
                setProject({ ...project, image: e.target.value })
              }
            >
              <option value="">-- Select image --</option>
              {imgList.map((img) => (
                <option key={img} value={img}>
                  {img.replace("/img/", "")}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
              Description
            </label>
            <textarea
              required
              rows="3"
              className="border border-slate-300 p-2.5 rounded-lg text-sm font-medium focus:border-blue-600 outline-none"
              value={project.desc}
              onChange={(e) => setProject({ ...project, desc: e.target.value })}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
              Tech Stack
            </label>
            <input
              type="text"
              className="border border-slate-300 p-2.5 rounded-lg text-sm font-bold focus:border-blue-600 outline-none"
              value={project.tech}
              onChange={(e) => setProject({ ...project, tech: e.target.value })}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
              URL / Link
            </label>
            <input
              type="text"
              className="border border-slate-300 p-2.5 rounded-lg text-sm font-bold focus:border-blue-600 outline-none"
              value={project.link}
              onChange={(e) => setProject({ ...project, link: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 shadow-lg transition-all"
        >
          {loading ? "Processing..." : "Save Project"}
        </button>
      </form>

      {/* PORTFOLIO LIST */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-black uppercase italic text-slate-900 tracking-tighter">
          📂 Portfolio ({projects.length})
        </h2>
        <div className="grid grid-cols-1 gap-3">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={proj.image}
                  alt=""
                  className="w-12 h-9 object-cover rounded-md bg-slate-200"
                  onError={(e) => (e.target.src = "/img/placeholder.png")}
                />
                <div>
                  <h3 className="font-black text-slate-900 uppercase italic text-xs leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest">
                    {proj.tag}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 text-[9px] font-black uppercase tracking-widest">
                <button
                  onClick={() => handleEdit(proj)}
                  className="text-slate-400 hover:text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(proj.id)}
                  className="text-slate-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
