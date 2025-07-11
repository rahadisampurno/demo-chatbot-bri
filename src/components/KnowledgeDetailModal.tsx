import React from 'react';
import { X, Clock, User, Tag, AlertCircle, Eye, ThumbsUp, ThumbsDown } from 'lucide-react';

interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  category: string;
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
  author: string;
  steps?: string[];
  requirements?: string[];
  notes?: string[];
  viewers: number;
  likes: number;
  dislikes: number;
  lastViewed?: string;
}

interface KnowledgeDetailModalProps {
  item: KnowledgeItem | null;
  isOpen: boolean;
  onClose: () => void;
  onLike?: (id: string) => void;
  onDislike?: (id: string) => void;
}

const KnowledgeDetailModal: React.FC<KnowledgeDetailModalProps> = ({ 
  item, 
  isOpen, 
  onClose, 
  onLike, 
  onDislike 
}) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              item.priority === 'high' ? 'bg-red-100 text-red-800' :
              item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {item.priority === 'high' ? 'Prioritas Tinggi' : 
               item.priority === 'medium' ? 'Prioritas Sedang' : 'Prioritas Rendah'}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Update: {item.lastUpdated}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="h-4 w-4" />
              <span>Penulis: {item.author}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Tag className="h-4 w-4" />
              <span>{item.keywords.length} kata kunci</span>
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-blue-500" />
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.viewers.toLocaleString()}</span>
                  <p className="text-xs text-gray-500">Dilihat</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="h-4 w-4 text-green-500" />
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.likes}</span>
                  <p className="text-xs text-gray-500">Suka</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsDown className="h-4 w-4 text-red-500" />
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.dislikes}</span>
                  <p className="text-xs text-gray-500">Tidak Suka</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-purple-500" />
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.lastViewed || 'Baru'}</span>
                  <p className="text-xs text-gray-500">Terakhir Dilihat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 mb-6">
            <button
              onClick={() => onLike?.(item.id)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
            >
              <ThumbsUp className="h-4 w-4" />
              <span className="text-sm font-medium">Suka ({item.likes})</span>
            </button>
            <button
              onClick={() => onDislike?.(item.id)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
            >
              <ThumbsDown className="h-4 w-4" />
              <span className="text-sm font-medium">Tidak Suka ({item.dislikes})</span>
            </button>
          </div>
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
            <p className="text-gray-700 mb-6">{item.content}</p>

            {item.requirements && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Persyaratan</h3>
                <ul className="list-disc list-inside space-y-2">
                  {item.requirements.map((req, index) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.steps && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Langkah-langkah</h3>
                <ol className="list-decimal list-inside space-y-2">
                  {item.steps.map((step, index) => (
                    <li key={index} className="text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {item.notes && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-blue-500" />
                  Catatan Penting
                </h3>
                <ul className="space-y-2">
                  {item.notes.map((note, index) => (
                    <li key={index} className="text-gray-700 bg-blue-50 p-3 rounded-lg">{note}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kata Kunci</h3>
              <div className="flex flex-wrap gap-2">
                {item.keywords.map((keyword, index) => (
                  <span key={index} className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeDetailModal;