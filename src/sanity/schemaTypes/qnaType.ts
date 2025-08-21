// /schemas/objects/qna.ts
const QnA = {
    name: 'qna',
    title: 'Q & A',
    type: 'object',
    fields: [
      { name: 'question', title: 'Question', type: 'string', validation: (R: any) => R.required() },
      { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (R: any) => R.required() },
    ],
    preview: {
      select: { title: 'question' },
    },
  }
  
  export default QnA
  