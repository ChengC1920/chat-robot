import axios from 'axios'
import { Message } from './types'

// 直接从客户端调用DeepSeek API
export async function sendMessage(messages: Message[]) {
  try {
    // 转换消息格式为DeepSeek API所需格式
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))
    
    console.log('Sending to DeepSeek API:', JSON.stringify(formattedMessages))
    
    // 使用更可靠的CORS代理
    const response = await axios.post(
      'https://corsproxy.io/?https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat',
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 2000
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || 'sk-d0eb23da9e8049c397dd9d2a7515a802'}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    )
    
    console.log('DeepSeek API response:', response.data)
    
    // 处理DeepSeek API响应
    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return {
        role: 'assistant',
        content: response.data.choices[0].message.content
      }
    } else {
      throw new Error('无效的DeepSeek API响应格式')
    }
  } catch (error) {
    console.error('Error sending message to DeepSeek:', error)
    throw error
  }
}

// OpenAI API集成示例
/*
export async function sendMessageToOpenAI(messages: Message[]) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    )
    
    return response.data.choices[0].message
  } catch (error) {
    console.error('Error sending message to OpenAI:', error)
    throw error
  }
}
*/ 