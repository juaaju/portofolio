'use client';

import { useState, useEffect } from 'react';

import { Briefcase, MapPin, Calendar, Youtube, Instagram, Github, Music, ChevronLeft, ChevronRight, Send, X } from 'lucide-react';

// Data pengalaman kerja
const experiences = [
  {
    id: 1,
    title: "IoT Engineer",
    company: "PT. Elefante Infradiji Solusi",
    location: "Jakarta",
    period: "Nov 2025 - Present",
    current: true,
    responsibilities: [
      "Developed IoT infrastructure for smart building management systems",
      "Implemented real-time monitoring using MQTT protocol and AWS IoT Core",
      "Collaborated with cross-functional teams to deliver scalable solutions",
      "Reduced system downtime by 40% through predictive maintenance algorithms"
    ],
    skills: ["ESP32", "Python", "MQTT", "AWS IoT", "Node-RED"]
  },
  {
    id: 2,
    title: "Laboratorium Assistant",
    company: "ECS Laboratory (Engineering Physics, ITS)",
    location: "Surabaya",
    period: "Jan 2024 - Jul 2024",
    current: false,
    responsibilities: [
      "Conducted research on computer vision applications for industrial safety",
      "Developed GPS localization for autnomous tractors",
      "Mentored junior students in machine learning training (EPTA)"
    ],
    skills: ["Python", "C++", "OpenCV", "TensorFlow", "Research"]
  },

];

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content?: string;
  contentHtml?: string;
}

interface Video {
  id: string;
  title: string;
  description: string;
}

interface Props {
  projects: Project[];
  videos: Video[];
}

export default function PortfolioClient({ projects, videos }: Props) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxProjectIndex = Math.max(0, projects.length - itemsPerView);
  const maxVideoIndex = Math.max(0, videos.length - itemsPerView);

  const nextProjects = () => setProjectIndex(i => Math.min(i + 1, maxProjectIndex));
  const prevProjects = () => setProjectIndex(i => Math.max(i - 1, 0));
  const nextVideos = () => setVideoIndex(i => Math.min(i + 1, maxVideoIndex));
  const prevVideos = () => setVideoIndex(i => Math.max(i - 1, 0));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all fields');
      return;
    }
    alert(`Email sent! Name: ${form.name}, Email: ${form.email}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Ajua</h1>
          <div className="flex gap-3 md:gap-4">
            <a href="https://instagram.com/azzuhaili" target="_blank" rel="noopener noreferrer"
               className="text-gray-800 hover:text-pink-500 transition">
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://youtube.com/@ajua_aja" target="_blank" rel="noopener noreferrer" 
               className="text-gray-800 hover:text-red-500 transition">
              <Youtube className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://github.com/juaaju" target="_blank" rel="noopener noreferrer"
               className="text-gray-800 hover:text-blue-700 transition">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://tiktok.com/@azzuhaili_" target="_blank" rel="noopener noreferrer"
               className="text-gray-800 hover:text-gray-400 transition">
              <Music className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img 
              src="images/profile.jpg" 
              alt="Azzuhaili"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang Saya</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Di sini saya sharing tentang embedded system, control system, AI, dan topik teknologi lainnya.
                Hobi saya ngutak-atik project hardware dan software, terus dokumentasiin prosesnya lewat video dan tutorial.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lulusan Teknik Fisika yang sekarang kerja sebagai IoT Engineer. 
                Suka banget cerita soal perjalanan belajar di bidang hardware dan software, 
                supaya lebih banyak orang yang tau kalau dunia ini ternyata seru dan menarik!
              </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Proyek yang Diselesaikan</h2>
          {projects.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No projects yet. Add some MD files!</p>
          ) : (
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex gap-4 transition-transform duration-300"
                  style={{ transform: `translateX(-${projectIndex * (100 / itemsPerView)}%)` }}
                >
                  {projects.map((project) => (
                    <div 
                      key={project.id} 
                      className="flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                      style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)` }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-blue-600 mt-3 font-medium hover:text-blue-800">Klik untuk detail lengkap →</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {projectIndex > 0 && (
                <button 
                  onClick={prevProjects}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {projectIndex < maxProjectIndex && (
                <button 
                  onClick={nextProjects}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 flex justify-between items-center p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6">
              {/* Project Image */}
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
              />

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Deskripsi</h3>
                {selectedProject.contentHtml && selectedProject.contentHtml.trim() ? (
                  <div 
                    className="text-gray-600 leading-relaxed [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3 [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_a]:text-blue-600 [&_a]:hover:underline [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-500 [&_blockquote]:my-3 [&_pre]:bg-gray-800 [&_pre]:text-gray-100 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-3"
                    dangerouslySetInnerHTML={{ __html: selectedProject.contentHtml }}
                  />
                ) : (
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{selectedProject.content || selectedProject.description}</p>
                )}
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Video Youtube</h2>
          {videos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No videos yet. Add videos to JSON file!</p>
          ) : (
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex gap-4 transition-transform duration-300"
                  style={{ transform: `translateX(-${videoIndex * (100 / itemsPerView)}%)` }}
                >
                  {videos.map((video) => (
                    <div 
                      key={video.id}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)` }}
                    >
                      <a 
                        href={`https://youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                      >
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full aspect-video object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">{video.title}</h3>
                          <p className="text-xs md:text-sm text-gray-600">{video.description}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {videoIndex > 0 && (
                <button 
                  onClick={prevVideos}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}
              {videoIndex < maxVideoIndex && (
                <button 
                  onClick={nextVideos}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Experience items */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                    exp.current 
                      ? 'bg-blue-600 border-blue-200' 
                      : 'bg-white border-gray-300'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="group">
                    {/* Header */}
                    <div className="mb-3">
                      <div className="flex flex-wrap items-start gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5 font-medium text-gray-700">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-600 text-sm md:text-base">
                          <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span 
                          key={skill} 
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Collab?</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input 
                type="text"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="Nama Kamu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea 
                rows={5}
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="Pesanmu..."
              />
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 font-medium"
            >
              <Send className="w-5 h-5" />
              Kirim Pesan
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 - Ajua.</p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition">
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}