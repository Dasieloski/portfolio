import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
    const fileName = request.nextUrl.searchParams.get('file')

    if (!fileName) {
        return NextResponse.json({ error: 'File name is required' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'public', fileName)

    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath)

        return new NextResponse(fileContent, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${fileName}`
            }
        })
    } else {
        return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }
}