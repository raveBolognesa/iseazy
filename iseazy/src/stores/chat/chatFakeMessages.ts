export const chatList: any[] = [
  {
    userName: 'user',
    userAvatar: 'avatar_user.jpg',
    type: 'ChatItemFilePayload',
    date: new Date(),
    payload: {
      title: 'Archivo 1',
      fileName: 'archivo1.pdf',
      type: 'application/pdf',
      size: 2048, // Tamaño en bytes
      uploadDate: new Date()
    }
  },
  {
    userName: 'user',
    userAvatar: 'avatar_user.jpg',
    type: 'ChatItemTextPayload',
    date: new Date(),
    payload: {
      message: 'Hola, ¿puedes revisar el archivo que acabo de enviarte?'
    }
  },
  {
    userName: 'Admin',
    userAvatar: 'avatar_Admin.jpg',
    type: 'ChatItemTextPayload',
    date: new Date(),
    payload: {
      message: 'Gran trabajo Silvia. Creo que deberias revisar el punto 3.'
    }
  },
  {
    userName: 'user',
    userAvatar: 'avatar_user.jpg',
    type: 'ChatItemFilePayload',
    date: new Date(),
    payload: {
      title: 'Archivo 2',
      fileName: 'archivo2.docx',
      type: 'application/msword',
      size: 4096, // Tamaño en bytes
      uploadDate: new Date()
    }
  },
  {
    userName: 'user',
    userAvatar: 'avatar_user.jpg',
    type: 'ChatItemTextPayload',
    date: new Date(),
    payload: {
      message:
        'He realizado algunas modificaciones en el archivo original. Por favor, revísalo de nuevo.'
    }
  },
  {
    userName: 'Admin',
    userAvatar: 'avatar_Admin.jpg',
    type: 'ChatItemTextPayload',
    date: new Date(),
    payload: {
      message: 'Estoy satisfecho con los cambios. ¡Gracias!'
    }
  }
]
