'use client'

import { ChatMessageProps } from '@/lib/types'
import ReactMarkdown from 'react-markdown'

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} group`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-700 dark:text-neutral-300 mr-2 flex-shrink-0">
          AI
        </div>
      )}
      <div className={`message ${isUser ? 'user-message' : 'ai-message'}`}>
        <ReactMarkdown 
          className="prose prose-neutral dark:prose-invert max-w-none prose-p:my-1 prose-pre:my-2 prose-pre:p-2 prose-pre:rounded-md prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-800 prose-code:text-primary-700 dark:prose-code:text-primary-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
        >
          {message.content}
        </ReactMarkdown>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs font-medium text-white ml-2 flex-shrink-0">
          你
        </div>
      )}
    </div>
  )
} 