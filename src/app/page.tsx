'use client'

import { useState, useRef, useEffect } from 'react'
import ChatMessage from '@/components/ChatMessage'
import ChatInput from '@/components/ChatInput'
import Header from '@/components/Header'
import { Message } from '@/lib/types'
import { sendMessage } from '@/lib/api'

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '你好！我是基于DeepSeek的AI助手，有什么我可以帮助你的吗？',
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    }
    
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      // 直接调用DeepSeek API
      const allMessages = [...messages, userMessage]
      const aiResponse = await sendMessage(allMessages)
      
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse.content,
      }
      
      setMessages((prev) => [...prev, newAiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      // 添加错误消息
      let errorMessage = '抱歉，处理您的请求时出现了错误。请稍后再试。'
      
      if (error instanceof Error) {
        if (error.message.includes('Network Error')) {
          errorMessage = '网络连接错误。请检查您的互联网连接并重试。'
        } else if (error.message.includes('timeout')) {
          errorMessage = 'DeepSeek API响应超时。请稍后再试。'
        } else if (error.message.includes('403')) {
          errorMessage = 'API密钥无效或已过期。请检查您的DeepSeek API密钥。'
        } else if (error.message.includes('429')) {
          errorMessage = 'API请求次数已达上限。请稍后再试。'
        }
      }
      
      const aiErrorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorMessage,
      }
      setMessages((prev) => [...prev, aiErrorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="chat-container">
      <Header />
      <div className="chat-messages">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-700 dark:text-neutral-300 mr-2 flex-shrink-0">
              AI
            </div>
            <div className="message ai-message">
              <div className="thinking-indicator">
                <div className="thinking-dot dot-1"></div>
                <div className="thinking-dot dot-2"></div>
                <div className="thinking-dot dot-3"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </main>
  )
} 