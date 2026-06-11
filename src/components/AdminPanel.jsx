import { useState, useEffect } from "react";
import { LogOut, Mail, CheckCircle, Clock, FileText, User, Trash2 } from "lucide-react";

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      fetchSubmissions(token);
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        setToken(data.token);
        setIsLoggedIn(true);
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("Cannot connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken("");
    setIsLoggedIn(false);
    setSubmissions([]);
  };

  const fetchSubmissions = async (adminToken) => {
    try {
      const res = await fetch("/api/submissions", {
        headers: { Authorization: adminToken }
      });
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data);
      } else {
        handleLogout();
      }
    } catch (err) {
      console.error("Failed to fetch submissions", err);
    }
  };

  const handleResolve = async (id) => {
    try {
      const res = await fetch(`/api/submissions/${id}/resolve`, {
        method: "POST",
        headers: { Authorization: token }
      });
      if (res.ok) {
        setSubmissions(prev => 
          prev.map(sub => sub.id === id ? { ...sub, status: "resolved" } : sub)
        );
      }
    } catch (err) {
      console.error("Failed to resolve submission", err);
    }
  };

  // Login view
  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-[#060a14] text-white flex items-center justify-center z-[9999] p-4 font-sans">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 via-transparent to-emerald-500/5 pointer-events-none" />
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full">
              Secured Panel
            </span>
            <h2 className="text-2xl font-bold tracking-tight mt-4 text-white">Admin Authentication</h2>
            <p className="text-gray-400 text-sm mt-2">Enter credentials to view client project requests</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="flex flex-col">
              <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. admin"
                className="bg-black/45 border border-white/10 focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-black/45 border border-white/10 focus:border-[#FF6B00] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] transition-all"
              />
            </div>

            {error && (
              <div className="text-red-500 text-xs font-mono bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-orange-600 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] text-white font-bold transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {loading ? "Authenticating..." : "Login to Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard stats
  const pendingCount = submissions.filter(s => s.status === "pending").length;
  const resolvedCount = submissions.filter(s => s.status === "resolved").length;

  return (
    <div className="min-h-screen bg-[#050811] text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Review, contact, and resolve client inquiries</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-xs text-gray-400 hover:text-white border border-white/10 px-4 py-2 rounded-full transition">
              Back to Site
            </a>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-xs bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 px-4 py-2 rounded-full transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{submissions.length}</div>
              <div className="text-xs text-gray-400">Total Submissions</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{pendingCount}</div>
              <div className="text-xs text-gray-400">Pending Actions</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{resolvedCount}</div>
              <div className="text-xs text-gray-400">Resolved Queries</div>
            </div>
          </div>
        </div>

        {/* Submissions List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Client Submissions</h2>
          {submissions.length === 0 ? (
            <div className="bg-white/5 border border-white/5 rounded-2xl py-12 text-center text-gray-500 text-sm">
              No submissions found.
            </div>
          ) : (
            <div className="grid gap-4">
              {submissions.map((sub) => (
                <div 
                  key={sub.id} 
                  className={`bg-white/5 border rounded-2xl p-6 transition flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
                    sub.status === 'resolved' ? 'border-white/5 opacity-60' : 'border-[#FF6B00]/25'
                  }`}
                >
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-center flex-wrap gap-2.5">
                      <span className="font-semibold text-lg flex items-center gap-1.5">
                        <User className="w-4 h-4 text-gray-400" />
                        {sub.name}
                      </span>
                      <span className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-0.5 rounded-full ${
                        sub.type === 'web' 
                          ? 'bg-[#FF6B00]/15 text-[#FF6B00]' 
                          : sub.type === 'mobile' 
                          ? 'bg-indigo-500/15 text-indigo-400' 
                          : 'bg-purple-500/15 text-purple-400'
                      }`}>
                        {sub.type === 'others' && sub.otherText ? sub.otherText : `${sub.type} App`}
                      </span>
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                        sub.status === 'resolved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {sub.status}
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed font-light">{sub.message}</p>
                    
                    <div className="text-xs text-gray-500 flex items-center gap-3 flex-wrap">
                      <span>{sub.email}</span>
                      {sub.whatsapp && (
                        <>
                          <span>•</span>
                          <a 
                            href={`https://wa.me/${sub.whatsapp.replace(/[^0-9]/g, "")}`} 
                            target="_blank" 
                            rel="noreferrer"
                            className="hover:text-[#FF6B00] transition-colors"
                          >
                            WhatsApp: {sub.whatsapp}
                          </a>
                        </>
                      )}
                      <span>•</span>
                      <span>{new Date(sub.createdAt).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <a
                      href={`mailto:${sub.email}?subject=Project inquiry: ${sub.type} application&body=Hi ${sub.name},%0D%0A%0D%0AThank you for reaching out via our portfolio site.%0D%0A%0D%0ARegards,%0D%0AAdmin`}
                      className="flex-1 md:flex-initial flex items-center justify-center gap-2 text-xs bg-[#FF6B00] hover:bg-[#ff9500] text-white px-4 py-2.5 rounded-xl transition font-semibold"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contact</span>
                    </a>
                    {sub.status === 'pending' && (
                      <button
                        onClick={() => handleResolve(sub.id)}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-2 text-xs bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 px-4 py-2.5 rounded-xl transition font-semibold"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Resolve</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;
