import { NextResponse } from 'next/server'
import { sendMessageToDeepSeek } from '@/lib/api'

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // 调用DeepSeek API
    const aiResponse = await sendMessageToDeepSeek(messages)
    
    return NextResponse.json({
      role: 'assistant',
      content: aiResponse.content,
    })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: '处理请求时出错', details: error instanceof Error ? error.message : '未知错误' },
      { status: 500 }
    )
  }
} 