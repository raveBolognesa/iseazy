export interface ChatItem {
  userName: string
  userAvatar: string
  type: string
  date: Date
  payload: ChatItemTextPayload | ChatItemFilePayload
}

export interface ChatItemTextPayload {
  message: string
}

export interface ChatItemFilePayload {
  title: string
  fileName: string
  type: string
  size: number
  uploadDate: Date
}
