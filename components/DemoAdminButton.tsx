'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, CheckCheck, MessageCircle } from 'lucide-react'

// WhatsApp-style typing indicator
const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3 bg-white rounded-2xl rounded-bl-sm shadow-sm w-fit">
    <motion.span
      className="w-2 h-2 bg-gray-400 rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
    />
    <motion.span
      className="w-2 h-2 bg-gray-400 rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
    />
    <motion.span
      className="w-2 h-2 bg-gray-400 rounded-full"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
    />
  </div>
)

// Message bubble component
const MessageBubble = ({
  text,
  isUser,
  time,
  showTicks = true
}: {
  text: string
  isUser: boolean
  time: string
  showTicks?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
  >
    <div
      className={`max-w-[85%] px-3 py-2 rounded-2xl shadow-sm ${
        isUser
          ? 'bg-[#DCF8C6] rounded-br-sm'
          : 'bg-white rounded-bl-sm'
      }`}
    >
      <p className="text-[15px] text-gray-800 leading-relaxed">{text}</p>
      <div className={`flex items-center gap-1 mt-0.5 ${isUser ? 'justify-end' : ''}`}>
        <span className="text-[11px] text-gray-500">{time}</span>
        {isUser && showTicks && (
          <CheckCheck className="w-4 h-4 text-[#53BDEB]" />
        )}
      </div>
    </div>
  </motion.div>
)

// Success animation component
const SuccessCheck = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
    className="inline-flex items-center justify-center w-5 h-5 bg-[#25D366] rounded-full ml-1"
  >
    <Check className="w-3 h-3 text-white" strokeWidth={3} />
  </motion.div>
)

export default function DemoAdminButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [stage, setStage] = useState(0)
  // Stage 0: Initial (show user message)
  // Stage 1: Typing indicator
  // Stage 2: Response received

  // Reset and run animation when modal opens
  useEffect(() => {
    if (isOpen) {
      setStage(0)

      // Show typing indicator after 800ms
      const timer1 = setTimeout(() => setStage(1), 800)

      // Show response after 2000ms
      const timer2 = setTimeout(() => setStage(2), 2000)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    setStage(0)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] text-white font-semibold rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 300, damping: 20 }}
      >
        <MessageCircle className="w-5 h-5" fill="white" />
        <span className="text-[15px]">See how updates work</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Phone Frame */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[380px] bg-[#E5DDD5] rounded-[40px] shadow-2xl overflow-hidden"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c1b9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl z-10" />

              {/* WhatsApp Header */}
              <div className="relative bg-[#075E54] pt-10 pb-3 px-4">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-10 right-3 p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[17px]">Connecteire</h3>
                    <p className="text-white/70 text-[13px]">Online</p>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="h-[380px] overflow-y-auto p-4 space-y-3">
                {/* Date chip */}
                <div className="flex justify-center mb-4">
                  <span className="px-3 py-1 bg-white/80 rounded-lg text-[12px] text-gray-600 shadow-sm">
                    Today
                  </span>
                </div>

                {/* User message - always visible */}
                <MessageBubble
                  text="Change Monday hours to 10am - 6pm"
                  isUser={true}
                  time="2:34 PM"
                />

                {/* Typing indicator or response */}
                {stage === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <TypingIndicator />
                  </motion.div>
                )}

                {stage === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    {/* Bot response */}
                    <div className="flex justify-start">
                      <div className="max-w-[85%] px-3 py-2 bg-white rounded-2xl rounded-bl-sm shadow-sm">
                        <p className="text-[15px] text-gray-800 leading-relaxed">
                          Done! Your Monday hours are now 10am - 6pm.
                          <SuccessCheck />
                        </p>
                        <p className="text-[13px] text-gray-600 mt-1.5">
                          Your website has been updated.
                        </p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-[11px] text-gray-500">2:34 PM</span>
                        </div>
                      </div>
                    </div>

                    {/* Magic moment callout */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center pt-2"
                    >
                      <div className="px-4 py-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl">
                        <p className="text-[13px] text-[#075E54] font-medium text-center">
                          That's it! Just text what you need changed.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Input area (decorative) */}
              <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-gray-400 text-[15px]">
                  Type a message...
                </div>
                <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>

              {/* Home indicator */}
              <div className="bg-[#F0F0F0] pb-2 pt-1 flex justify-center">
                <div className="w-32 h-1 bg-gray-400 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
