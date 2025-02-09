import React, { useState, useRef } from 'react';
import { Box, Phone, Globe, HelpCircle, ArrowLeft, ArrowRight, Upload, Link as LinkIcon, Plus, ChevronDown } from 'lucide-react';

const Tooltip = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute right-0 top-0 transform translate-x-full ml-2">
      <div className="bg-[#1c3033] text-white text-sm p-3 rounded-lg max-w-xs">
        <p className="mb-2">You have to choose the integration type:</p>
        <p className="mb-1"><strong>Website Widget:</strong> Set up chat widget</p>
        <p className="mb-1"><strong>Phone No:</strong> Set up integration with phone no</p>
        <p><strong>Both:</strong> Integration with everything</p>
      </div>
    </div>
  );
};

const IntegrationTypeSelection = ({ onSelectType }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  return (
    <div className="relative">
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => onSelectType('website')}
          className="bg-[#1c3033] hover:bg-[#2a4447] p-6 rounded-xl flex flex-col items-center gap-2 transition-colors w-40"
        >
          <Globe size={24} className="text-gray-400" />
          <span className="text-sm text-white">Website widget</span>
        </button>

        <button 
          onClick={() => onSelectType('phone')}
          className="bg-[#1c3033] hover:bg-[#2a4447] p-6 rounded-xl flex flex-col items-center gap-2 transition-colors w-40"
        >
          <Phone size={24} className="text-gray-400" />
          <span className="text-sm text-white">Phone No</span>
        </button>

        <button 
          onClick={() => onSelectType('both')}
          className="bg-[#1c3033] hover:bg-[#2a4447] p-6 rounded-xl flex flex-col items-center gap-2 transition-colors w-40"
        >
          <div className="flex gap-1">
            <Globe size={24} className="text-gray-400" />
            <Phone size={24} className="text-gray-400" />
          </div>
          <span className="text-sm text-white">Both</span>
        </button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <button 
          className="bg-[#1c3033] p-2 rounded-full relative"
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          onClick={() => setIsTooltipVisible(!isTooltipVisible)}
        >
          <HelpCircle size={20} className="text-gray-400" />
          <Tooltip isVisible={isTooltipVisible} />
        </button>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [faqs, setFaqs] = useState([]);

  const handleAddFAQ = () => {
    if (question.trim() && answer.trim()) {
      setFaqs([...faqs, { question, answer }]);
      setQuestion('');
      setAnswer('');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-white font-medium">FAQ</label>
        <button 
          onClick={handleAddFAQ}
          className="flex items-center gap-2 bg-[#2a4447] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#396268] transition-colors"
        >
          <Plus size={16} />
          Add FAQ
        </button>
      </div>
      
      <div className="space-y-3">
        <div>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Q: How are you ?"
            className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268] mb-2"
          />
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="A: I am good what about you.."
            className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268]"
          />
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              value={faq.question}
              readOnly
              className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white focus:outline-none focus:border-[#396268]"
            />
            <input
              type="text"
              value={faq.answer}
              readOnly
              className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white focus:outline-none focus:border-[#396268]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};



const BehaviorSettingsForm = ({ onBack }) => {
  const [fallbackResponses, setFallbackResponses] = useState([
    { user: "Can you transfer me to a live agent?", bot: "Currently, I'm unable to connect you to a live agent" }
  ]);

  const handleAddFallback = () => {
    setFallbackResponses([
      ...fallbackResponses,
      { user: "", bot: "" }
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#0B0E0F] rounded-2xl border border-[#1c3033]">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-[#1c3033] hover:bg-[#2a4447] transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-400" />
          </button>
          <h2 className="text-xl font-semibold text-white">Behavior Settings</h2>
          <button className="p-2 rounded-full bg-[#1c3033] hover:bg-[#2a4447] transition-colors">
            <ArrowRight size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2">Greeting</label>
            <input 
              type="text"
              defaultValue="Hello, this is Ava. How may I assist you today?"
              className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268]"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-white">Fallback responses:</label>
              <button 
                onClick={handleAddFallback}
                className="flex items-center gap-2 bg-[#2a4447] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#396268] transition-colors"
              >
                <Plus size={16} />
                Add +
              </button>
            </div>
            
            <div className="space-y-3">
              {fallbackResponses.map((response, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">U:</span>
                    <input 
                      type="text"
                      value={response.user}
                      onChange={(e) => {
                        const newResponses = [...fallbackResponses];
                        newResponses[index].user = e.target.value;
                        setFallbackResponses(newResponses);
                      }}
                      placeholder="User message"
                      className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Bot:</span>
                    <input 
                      type="text"
                      value={response.bot}
                      onChange={(e) => {
                        const newResponses = [...fallbackResponses];
                        newResponses[index].bot = e.target.value;
                        setFallbackResponses(newResponses);
                      }}
                      placeholder="Bot response"
                      className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const CustomizationsForm = ({ onBack, onNext }) => {
  return (
    <div className="max-w-2xl mx-auto bg-[#0B0E0F] rounded-2xl border border-[#1c3033]">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-[#1c3033] hover:bg-[#2a4447] transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-400" />
          </button>
          <h2 className="text-xl font-semibold text-white">Customizations</h2>
          <button 
            onClick={onNext}
            className="p-2 rounded-full bg-[#1c3033] hover:bg-[#2a4447] transition-colors"
          >
            <ArrowRight size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2">Voice:</label>
            <div className="relative">
              <select 
                className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white appearance-none focus:outline-none focus:border-[#396268] pr-10"
                defaultValue="calm-lady"
              >
                <option value="calm-lady">Calm Lady</option>
                <option value="professional-male">Professional Male</option>
                <option value="friendly-female">Friendly Female</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-white mb-2">Language:</label>
            <div className="relative">
              <select 
                className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white appearance-none focus:outline-none focus:border-[#396268] pr-10"
                defaultValue="english"
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InformationForm = ({ onBack, onNext }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#0B0E0F] rounded-2xl border border-[#1c3033]">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="p-2 rounded-full bg-[#1c3033] hover:bg-[#2a4447] transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-400" />
          </button>
          <h2 className="text-xl font-semibold text-white">Provide the information</h2>
          <button 
            onClick={onNext}
            className="p-2 rounded-full bg-[#1c3033] hover:bg-[#2a4447] transition-colors"
          >
            <ArrowRight size={20} className="text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-white mb-2">
              Paste your website link <LinkIcon size={16} className="text-gray-400" />
            </label>
            <input 
              type="text"
              placeholder="www.help.com"
              className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268]"
            />
          </div>

          <div>
            <label className="block text-white mb-2">Upload your documents</label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            <button 
              onClick={handleFileClick}
              className="flex items-center gap-2 bg-[#1c3033] hover:bg-[#2a4447] transition-colors rounded-lg px-4 py-2 text-gray-400"
            >
              <Upload size={20} />
              <span>{selectedFile ? selectedFile.name : 'Upload file'}</span>
            </button>
          </div>

          <div>
            <label className="block text-white mb-2">
              Enter your custom prompt for your agent, such as its role, conversational style, objective, etc..
            </label>
            <textarea 
              className="w-full bg-[#1c3033] border border-[#2a4447] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#396268] min-h-[120px] resize-none"
            />
          </div>

          <FAQSection />
        </div>
      </div>
    </div>
  );
};



const NoAgentsView = ({ onCreateClick }) => {
  return (
    <div className="flex-1 min-h-screen bg-[#0B0E0F] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#396268] rounded-lg flex items-center justify-center mb-4 mx-auto">
          <Box className="text-white" size={32} />
        </div>
        <p className="text-white mb-4">You don't have agent yet</p>
        <button 
          onClick={onCreateClick}
          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
        >
          Create Agent
        </button>
      </div>
    </div>
  );
};

const Agents = () => {
  const [agents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [currentStep, setCurrentStep] = useState('type'); // 'type', 'info', 'customization'

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedType(null);
    setCurrentStep('type');
  };

  const handleBack = () => {
    if (currentStep === 'behavior') {
      setCurrentStep('customization');
    } else if (currentStep === 'customization') {
      setCurrentStep('info');
    } else if (currentStep === 'info') {
      setCurrentStep('type');
      setSelectedType(null);
    }
  };

  const handleNext = () => {
    if (currentStep === 'info') {
      setCurrentStep('customization');
    } else if (currentStep === 'customization') {
      setCurrentStep('behavior');
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setCurrentStep('info');
  };

  if (!isModalOpen) {
    return <NoAgentsView onCreateClick={handleCreateClick} />;
  }

  return (
    <div className="flex-1 min-h-screen bg-[#0B0E0F] p-8">
      <div className="max-w-3xl mx-auto">
        {currentStep === 'type' && (
          <>
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              Choose Integration Type
            </h2>
            <IntegrationTypeSelection onSelectType={handleTypeSelect} />
          </>
        )}
        {currentStep === 'info' && (
          <InformationForm onBack={handleBack} onNext={handleNext} />
        )}
        {currentStep === 'customization' && (
          <CustomizationsForm onBack={handleBack} onNext={handleNext} />
        )}
        {currentStep === 'behavior' && (
          <BehaviorSettingsForm onBack={handleBack} />
        )}
      </div>
    </div>
  );
};
export default Agents;