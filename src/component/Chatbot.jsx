import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LuBot, LuUser, LuSend, LuX } from 'react-icons/lu';

const Chatbot = ({ isOpen, onClose }) => {
    const { t, lang } = useLanguage();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMessages([{ 
            text: t.chatBotGreeting, 
            sender: 'bot', 
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
        }]);
    }, [lang, t.chatBotGreeting]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (input.trim() && !isTyping) {
            const userMsg = { 
                text: input, 
                sender: 'user', 
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
            };
            setMessages(prev => [...prev, userMsg]);
            const currentInput = input;
            setInput('');
            
            setIsTyping(true);
            
            // AI Thinking Simulation
            setTimeout(() => {
                const botMsg = { 
                    text: getAIResponse(currentInput), 
                    sender: 'bot', 
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
                };
                setMessages(prev => [...prev, botMsg]);
                setIsTyping(false);
            }, 1500);
        }
    };

    const getAIResponse = (query) => {
        const q = query.toLowerCase();
        const isMarathi = lang === 'mr';

        // Personal Knowledge Base from Tejas's Resume
        const tejasInfo = {
            name: "Tejas Lavhale",
            location: "Pune, Maharashtra",
            email: "tejaslavhale008@gmail.com",
            phone: "+91 8329610279",
            education: "BCA from SRTMU Nanded and Logistic Management from PCET Pune (2025)",
            internship: "THE BAAP COMPANY",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "UI/UX Design"],
            languages: ["Marathi", "Hindi", "English"],
            motto: "Delivering high-quality web solutions with clean and efficient code."
        };

        const intentMap = [
            {
                id: 'identity',
                keywords: ['who are you', 'what is your name', 'tell me about yourself', 'introduction', 'तू कोण आहेस', 'तुझं नाव काय', 'तुझी माहिती'],
                en: `I am the AI assistant of ${tejasInfo.name}. He is a dedicated Web Developer based in ${tejasInfo.location}, currently specializing in React.js and modern web technologies.`,
                mr: `मी ${tejasInfo.name} चा AI असिस्टंट आहे. तो ${tejasInfo.location} येथील एक वेब डेव्हलपर आहे, जो सध्या React.js आणि आधुनिक वेब तंत्रज्ञानामध्ये तज्ञ आहे.`
            },
            {
                id: 'contact',
                keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'address', 'संपर्क', 'इमेल', 'फोन', 'नंबर'],
                en: `You can reach Tejas at ${tejasInfo.email} or call/WhatsApp him at ${tejasInfo.phone}. He is based in Pune.`,
                mr: `तुम्ही तेजसशी ${tejasInfo.email} वर किंवा ${tejasInfo.phone} या नंबरवर कॉल/व्हॉट्सअ‍ॅपद्वारे संपर्क साधू शकता. तो पुण्यात राहतो.`
            },
            {
                id: 'skills',
                keywords: ['skill', 'knowledge', 'stack', 'techno', 'language', 'react', 'javascript', 'कौशल्य', 'काय येतं'],
                en: `Tejas is highly skilled in ${tejasInfo.skills.join(', ')}. He focuses on building responsive and interactive user interfaces.`,
                mr: `तेजस ${tejasInfo.skills.join(', ')} मध्ये अत्यंत कुशल आहे. तो रिस्पॉन्सिव्ह आणि इंटरअॅक्टिव्ह युजर इंटरफेस बनवण्यावर लक्ष केंद्रित करतो.`
            },
            {
                id: 'education',
                keywords: ['study', 'education', 'college', 'degree', 'bca', 'pcet', 'शिक्षण', 'पदवी', 'शिकला'],
                en: `He has completed his ${tejasInfo.education}. He is a 2025 graduate from PCET Pune.`,
                mr: `त्याने त्याचे ${tejasInfo.education} पूर्ण केले आहे. तो PCET पुणे येथील २०२५ चा पदवीधर आहे.`
            },
            {
                id: 'experience',
                keywords: ['experience', 'work', 'job', 'intern', 'company', 'baap', 'अनुभव', 'काम', 'नोकरी', 'इंटर्न'],
                en: `Tejas has gained professional experience as an Intern at ${tejasInfo.internship}. He has also worked on various freelance projects.`,
                mr: `तेजसने ${tejasInfo.internship} मध्ये इंटर्न म्हणून व्यावसायिक अनुभव मिळवला आहे. त्याने विविध फ्रीलान्स प्रकल्पांवर देखील काम केले आहे.`
            },
            {
                id: 'hire',
                keywords: ['hire', 'salary', 'available', 'job offer', 'काम देणार', 'पगार'],
                en: `Tejas is currently open to new opportunities! You can discuss roles or freelance projects directly with him via his contact details.`,
                mr: `तेजस सध्या नवीन संधींसाठी उपलब्ध आहे! तुम्ही त्याच्याशी थेट संपर्क साधून प्रोजेक्ट्स किंवा नोकरीबद्दल चर्चा करू शकता.`
            }
        ];

        // Advanced Matching Logic
        let bestMatch = null;
        let highestScore = 0;

        intentMap.forEach(intent => {
            let score = 0;
            intent.keywords.forEach(keyword => {
                if (q.includes(keyword)) score += 1;
            });
            if (score > highestScore) {
                highestScore = score;
                bestMatch = intent;
            }
        });

        if (bestMatch && highestScore > 0) {
            return isMarathi ? bestMatch.mr : bestMatch.en;
        }

        // AI-style fallback (More helpful than a generic error)
        if (q.includes('?') || q.length > 10) {
            return isMarathi 
                ? "मला तुमच्या प्रश्नाचे नेमके उत्तर माहित नाही, पण मी तुम्हाला तेजसचे ईमेल (tejaslavhale008@gmail.com) किंवा त्याचा 'Experience' विभाग पाहण्यास सुचवू शकतो. त्याबद्दल काही विचारायचे आहे का?"
                : "I'm not entirely sure about that specific detail, but I can definitely help you with Tejas's technical skills, his internship at THE BAAP COMPANY, or his contact info. What else would you like to know?";
        }

        return isMarathi 
            ? "नमस्कार! मी तुम्हाला तेजसच्या करिअर, कौशल्ये किंवा प्रकल्पांबद्दल माहिती देऊ शकतो. कृपया काहीतरी विचारून पहा!" 
            : "Hello! I can provide detailed information about Tejas's career, tech stack, or projects. Feel free to ask anything specific!";
    };

    return (
        <div className={`chatbot-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="chatbot-header">
                <div className="bot-info">
                    <div className="bot-avatar">
                        <LuBot />
                    </div>
                    <div>
                        <h3>{t.chatTitle}</h3>
                        <span className="online-status">AI Online</span>
                    </div>
                </div>
                <button onClick={onClose} className="chatbot-close-btn">
                    <LuX />
                </button>
            </div>

            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message-wrapper ${msg.sender}`}>
                        <div className="message-bubble">
                            <p>{msg.text}</p>
                            <span className="message-time">{msg.time}</span>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="message-wrapper bot">
                        <div className="message-bubble typing">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="chatbot-input-area">
                <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder={t.chatInput} 
                />
                <button type="submit" disabled={isTyping}>
                    <LuSend />
                </button>
            </form>
        </div>
    );
};

export default Chatbot;
