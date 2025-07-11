import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Database, 
  Shield, 
  Settings, 
  Users, 
  HeadphonesIcon,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Book,
  Wifi,
  WifiOff,
  Eye,
  ThumbsUp,
  ThumbsDown,
  TrendingUp
} from 'lucide-react';
import BRILogo from './components/BRILogo';
import AutocompleteInput from './components/AutocompleteInput';
import KnowledgeDetailModal from './components/KnowledgeDetailModal';
import { knowledgeBase, type KnowledgeItem } from './data/knowledgeBase';
import { quickQuestions } from './data/quickQuestions';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  category?: string;
}

const securityPrompts = [
  'Informasi yang diberikan harus sesuai dengan kebijakan BRI terbaru',
  'Tidak memberikan informasi rahasia atau sensitif',
  'Memverifikasi identitas pengguna sebelum memberikan informasi khusus',
  'Menggunakan bahasa yang profesional dan mudah dipahami'
];

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Selamat datang di BRI Knowledge Management System! 🏦\n\nSaya siap membantu Anda dengan informasi produk, prosedur, dan panduan operasional BRI. Dengan database 1430 halaman yang komprehensif, saya dapat memberikan jawaban akurat untuk mendukung operasional cabang di seluruh Indonesia.\n\nBagaimana saya dapat membantu Anda hari ini?',
      timestamp: new Date(),
      category: 'greeting'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState('chat');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKnowledge, setSelectedKnowledge] = useState<KnowledgeItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [knowledgeData, setKnowledgeData] = useState(knowledgeBase);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  // Ambil semua kategori unik
  const categories = Array.from(new Set(knowledgeBase.map(item => item.category)));
  const priorities = ['high', 'medium', 'low'];

  // Filter knowledge base
  const filteredKnowledge = knowledgeBase.filter(item => {
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchPriority = selectedPriority ? item.priority === selectedPriority : true;
    return matchSearch && matchCategory && matchPriority;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredKnowledge.length / itemsPerPage);
  const paginatedKnowledge = filteredKnowledge.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page ke 1 jika filter/search berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedPriority]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findRelevantKnowledge = (query: string): KnowledgeItem | null => {
    const lowerQuery = query.toLowerCase();
    const relevantItems = knowledgeBase.filter(item => 
      item.keywords.some(keyword => lowerQuery.includes(keyword.toLowerCase())) ||
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery)
    );
    
    return relevantItems.length > 0 ? relevantItems[0] : null;
  };

  const generateBotResponse = (userMessage: string): string => {
    const knowledge = findRelevantKnowledge(userMessage);
    
    if (knowledge) {
      return `📋 **${knowledge.title}**\n\n${knowledge.content}\n\n💡 *Kategori: ${knowledge.category}*\n*Terakhir diupdate: ${knowledge.lastUpdated}*\n\nApakah ada hal lain yang ingin Anda tanyakan? Anda juga dapat melihat detail lengkap di tab Knowledge Base.`;
    }
    
    if (userMessage.toLowerCase().includes('internet') || userMessage.toLowerCase().includes('offline')) {
      return `🌐 **Akses Offline KMS**\n\nSistem KMS kami dilengkapi dengan:\n• Cache data lokal untuk akses offline\n• Sinkronisasi otomatis saat koneksi tersedia\n• Panduan prioritas tersimpan di perangkat\n• Backup database lokal 1430 halaman\n\nAnda tetap dapat mengakses informasi penting meski koneksi terbatas.`;
    }
    
    if (userMessage.toLowerCase().includes('security') || userMessage.toLowerCase().includes('keamanan')) {
      return `🔐 **Sistem Keamanan KMS**\n\nFitur keamanan meliputi:\n• Autentikasi berlapis untuk akses informasi\n• Enkripsi data end-to-end\n• Audit trail untuk semua aktivitas\n• Limitasi akses berdasarkan role pengguna\n• Prompting security untuk mencegah kebocoran data\n\nSemua informasi dijamin aman dan sesuai standar BRI.`;
    }
    
    return `Maaf, saya tidak menemukan informasi spesifik untuk pertanyaan Anda. Namun, saya dapat membantu dengan:\n\n• Produk & Layanan BRI (${knowledgeBase.filter(k => k.category === 'Produk & Layanan').length} topik)\n• Prosedur Kredit (${knowledgeBase.filter(k => k.category === 'Kredit').length} topik)\n• Digital Banking (${knowledgeBase.filter(k => k.category === 'Digital Banking').length} topik)\n• Compliance & Regulasi (${knowledgeBase.filter(k => k.category === 'Compliance').length} topik)\n• Operasional Harian (${knowledgeBase.filter(k => k.category === 'Operasional').length} topik)\n\nSilakan ajukan pertanyaan yang lebih spesifik atau gunakan salah satu pertanyaan referensi di bawah.`;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLike = (id: string) => {
    setKnowledgeData(prev => prev.map(item => 
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    ));
  };

  const handleDislike = (id: string) => {
    setKnowledgeData(prev => prev.map(item => 
      item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item
    ));
  };

  const handleKnowledgeView = (item: KnowledgeItem) => {
    // Increment viewer count
    setKnowledgeData(prev => prev.map(k => 
      k.id === item.id ? { 
        ...k, 
        viewers: k.viewers + 1,
        lastViewed: 'Baru saja'
      } : k
    ));
    
    // Update selected knowledge with new data
    const updatedItem = knowledgeData.find(k => k.id === item.id);
    if (updatedItem) {
      setSelectedKnowledge({
        ...updatedItem,
        viewers: updatedItem.viewers + 1,
        lastViewed: 'Baru saja'
      });
    }
    setIsModalOpen(true);
  };
  const handleKnowledgeClick = (item: KnowledgeItem) => {
    handleKnowledgeView(item);
  };

  const getRandomQuestions = (count: number = 8) => {
    const shuffled = [...quickQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const [displayedQuestions] = useState(getRandomQuestions());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <BRILogo className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Knowledge Management System</h1>
                <p className="text-sm text-gray-600">Mendukung Cabang di Pelosok Indonesia • 1430 Halaman Database</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {isOnline ? (
                  <><Wifi className="h-5 w-5 text-green-500" /><span className="text-sm text-green-600">Online</span></>
                ) : (
                  <><WifiOff className="h-5 w-5 text-red-500" /><span className="text-sm text-red-600">Offline Mode</span></>
                )}
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className="px-3 py-1 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition-colors"
              >
                Toggle Connection
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Features Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fitur Utama KMS</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Database className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Knowledge Base</h4>
                    <p className="text-sm text-gray-600">1430 halaman informasi komprehensif</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Security System</h4>
                    <p className="text-sm text-gray-600">Limitasi respon berdasarkan FAQ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Dashboard V3</h4>
                    <p className="text-sm text-gray-600">Pengelolaan terpusat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Training System</h4>
                    <p className="text-sm text-gray-600">Pelatihan Botmaster</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <HeadphonesIcon className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Annual Support</h4>
                    <p className="text-sm text-gray-600">Maintenance berkelanjutan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Location Simulator */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-4 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lokasi Cabang</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span className="text-sm text-gray-700">BRI Unit Pelosok Kalimantan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-gray-700">Jam Operasional: 08:00 - 15:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isOnline ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="text-sm text-gray-700">
                    {isOnline ? 'Koneksi Stabil' : 'Mode Offline Aktif'}
                  </span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-4 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistik Database</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Artikel</span>
                  <span className="text-sm font-medium text-gray-900">{knowledgeData.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Prioritas Tinggi</span>
                  <span className="text-sm font-medium text-red-600">
                    {knowledgeData.filter(k => k.priority === 'high').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Kategori</span>
                  <span className="text-sm font-medium text-blue-600">
                    {new Set(knowledgeData.map(k => k.category)).size}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Pertanyaan Referensi</span>
                  <span className="text-sm font-medium text-green-600">{quickQuestions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Views</span>
                  <span className="text-sm font-medium text-purple-600">
                    {knowledgeData.reduce((sum, k) => sum + k.viewers, 0).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Likes</span>
                  <span className="text-sm font-medium text-green-600">
                    {knowledgeData.reduce((sum, k) => sum + k.likes, 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Top Articles */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-4 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                Artikel Populer
              </h3>
              <div className="space-y-3">
                {knowledgeData
                  .sort((a, b) => b.viewers - a.viewers)
                  .slice(0, 5)
                  .map((item, index) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800' :
                        index === 2 ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {item.viewers.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {item.likes}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Tabs */}
              <div className="border-b border-gray-200 overflow-x-auto">
                <nav className="-mb-px flex space-x-4 sm:space-x-8 px-2 sm:px-6">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'chat' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <MessageSquare className="h-4 w-4 inline mr-2" />
                    Chat Assistant
                  </button>
                  <button
                    onClick={() => setActiveTab('knowledge')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'knowledge' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Book className="h-4 w-4 inline mr-2" />
                    Knowledge Base ({knowledgeData.length})
                  </button>
                </nav>
              </div>

              {/* Chat Tab */}
              {activeTab === 'chat' && (
                <div className="h-[60vh] sm:h-[600px] flex flex-col">
                  {/* Quick Questions */}
                  <div className="p-4 border-b border-gray-100">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Pertanyaan Referensi:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {displayedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => setInputMessage(question)}
                          className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs hover:bg-blue-100 transition-colors text-left"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-2 sm:p-6 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                            message.type === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-2 sm:p-6 border-t border-gray-200">
                    <AutocompleteInput
                      value={inputMessage}
                      onChange={setInputMessage}
                      onSend={handleSendMessage}
                      placeholder="Ketik pertanyaan Anda... (coba ketik 'asuransi', 'kredit', 'transfer', dll)"
                      disabled={isTyping}
                    />
                    <div className="mt-3 text-xs text-gray-500">
                      💡 Tips: Ketik kata kunci seperti "asuransi", "kredit", "transfer" untuk melihat saran otomatis
                    </div>
                  </div>
                </div>
              )}

              {/* Knowledge Base Tab */}
              {activeTab === 'knowledge' && (
                <div className="p-2 sm:p-6">
                  <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari dalam knowledge base..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={e => setSelectedCategory(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Semua Kategori</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <select
                      value={selectedPriority}
                      onChange={e => setSelectedPriority(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Semua Prioritas</option>
                      <option value="high">Tinggi</option>
                      <option value="medium">Sedang</option>
                      <option value="low">Rendah</option>
                    </select>
                  </div>
                  {(searchQuery || selectedCategory || selectedPriority) && (
                    <p className="text-sm text-gray-600 mb-2 sm:mb-4">
                      Ditemukan {filteredKnowledge.length} hasil
                      {searchQuery && <> untuk "{searchQuery}"</>}
                      {selectedCategory && <> di kategori <b>{selectedCategory}</b></>}
                      {selectedPriority && <> dengan prioritas <b>{selectedPriority === 'high' ? 'Tinggi' : selectedPriority === 'medium' ? 'Sedang' : 'Rendah'}</b></>}
                    </p>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    {paginatedKnowledge.map((item) => {
                      const currentItem = knowledgeData.find(k => k.id === item.id) || item;
                      return (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-medium text-gray-900 flex-1 mr-2 text-sm leading-relaxed">{item.title}</h3>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                item.priority === 'high' ? 'bg-red-100 text-red-800' :
                                item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.priority === 'high' ? 'Tinggi' : 
                                 item.priority === 'medium' ? 'Sedang' : 'Rendah'}
                              </span>
                              <button
                                onClick={() => handleKnowledgeClick(currentItem)}
                                className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                                title="Lihat detail"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.content.substring(0, 120)}...</p>
                          
                          {/* Engagement Stats */}
                          <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {currentItem.viewers.toLocaleString()} views
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {currentItem.likes}
                            </span>
                            <span className="flex items-center">
                              <ThumbsDown className="h-3 w-3 mr-1" />
                              {currentItem.dislikes}
                            </span>
                            {currentItem.lastViewed && (
                              <span className="text-purple-600">
                                • {currentItem.lastViewed}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {item.category}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {item.keywords.slice(0, 3).map((keyword, index) => (
                                <span key={index} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                  {keyword}
                                </span>
                              ))}
                              {item.keywords.length > 3 && (
                                <span className="text-xs text-gray-500">+{item.keywords.length - 3}</span>
                              )}
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            Update: {item.lastUpdated} • {item.author}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 mt-4 sm:mt-8">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
                      >
                        Prev
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 rounded border ${currentPage === page ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 hover:bg-gray-100'}`}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-100 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-4 sm:mt-8 bg-white rounded-xl shadow-sm p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Manfaat KMS untuk Cabang di Pelosok</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Akses Informasi Lengkap</h4>
              <p className="text-sm text-gray-600">1430 halaman knowledge base tersedia offline, memastikan informasi selalu dapat diakses meski koneksi terbatas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Keamanan Terjamin</h4>
              <p className="text-sm text-gray-600">Sistem security yang membatasi respons berdasarkan FAQ dan memastikan informasi sesuai standar BRI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Dukungan Berkelanjutan</h4>
              <p className="text-sm text-gray-600">Training untuk Botmaster dan annual maintenance memastikan sistem selalu optimal</p>
            </div>
          </div>
        </div>

        {/* Scenario Example */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">💡 Contoh Skenario Penggunaan</h3>
          <div className="bg-white rounded-lg p-4 mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Skenario: Karyawan Cabang Pelosok Membutuhkan Info Produk</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">1</span>
                <p>Nasabah datang ke cabang pelosok menanyakan syarat kredit UMKM</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">2</span>
                <p>Karyawan membuka chatbot KMS dan mengetik "syarat kredit UMKM"</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">3</span>
                <p>Sistem langsung memberikan informasi lengkap: plafon, bunga, tenor, dan syarat</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">4</span>
                <p>Karyawan dapat melayani nasabah dengan informasi akurat dalam hitungan detik</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Keunggulan:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Respons cepat tanpa menunggu komunikasi ke kantor pusat</li>
              <li>• Informasi konsisten dan sesuai standar BRI</li>
              <li>• Dapat diakses meski koneksi internet terbatas</li>
              <li>• Meningkatkan kepercayaan nasabah dengan pelayanan profesional</li>
              <li>• Database {knowledgeData.length} artikel dengan {quickQuestions.length} pertanyaan referensi</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Knowledge Detail Modal */}
      <KnowledgeDetailModal
        item={selectedKnowledge}
        isOpen={isModalOpen}
        onLike={handleLike}
        onDislike={handleDislike}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedKnowledge(null);
        }}
      />
    </div>
  );
}

export default App;