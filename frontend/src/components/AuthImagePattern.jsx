import { motion } from "framer-motion";

const AuthImagePattern = ({ title, subtitle }) => {
  const messages = [
    { text: "Hello!", isUser: false },
    { text: "Hi! How are you?", isUser: true },
    { text: "I'm good, thanks! Excited to try Insta app!", isUser: false },
    { text: "Awesome! Let's chat 😊🚀", isUser: true },
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Animasi Bubble Chat */}
        <div className="space-y-3 mb-8">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.isUser ? 50 : -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: i * 0.3, duration: 0.5 }}
              className={`p-3 rounded-lg text-left w-max max-w-xs ${
                msg.isUser
                  ? "bg-primary text-white ml-auto"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
