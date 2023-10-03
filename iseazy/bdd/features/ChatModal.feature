Feature: User wants to chat

  Scenario: Bob wants to chat with the app
    Given opens the website with title 'Vite App'
    When the user clicks on the 'button#chat-button' with the text 'Chat'
    Then the user see the modal with heading 'Comentarios'


  Scenario: Bob wants to test if the chat opens and records comments
    Given opens the website with title 'Vite App'
    When the user clicks on the 'button#chat-button' with the text 'Chat'
    When fills the input with id 'comment-input' with value 'Test coment'
    Then the user sees the coment 'Test coment'


  Scenario: Bob wants to test if the chat opens and closes correctly
    Given opens the website with title 'Vite App'
    When the user clicks on the 'button#chat-button' with the text 'Chat'
    When the user clicks on the 'button#close-button'
    Then the user don't see the modal with heading 'Comentarios'

