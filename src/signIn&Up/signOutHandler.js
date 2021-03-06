import { listeners } from '../additional/eventListeners'
export function signOutHandler() {
  try {
    console.log('signOutHandler')
    const logOutBtn = document.getElementById('logOutBtn')
    const myProfileBtn = document.getElementById('myProfileBtn')

    logOutBtn.removeEventListener('click', listeners.myProfile)
    logOutBtn.addEventListener('click', listeners.signUpBtn)
    logOutBtn.id = 'signUpBtn'
    logOutBtn.innerHTML = `<a href="#" class="btn btn-sm animated-button sandy-one">Регистрация</a>`

    myProfileBtn.removeEventListener('click', listeners.signOutHandler)
    myProfileBtn.addEventListener('click', listeners.signInBtn)
    myProfileBtn.id = 'signInBtn'
    myProfileBtn.innerHTML = `<a href="#" class="btn btn-sm animated-button sandy-one">Вход</a>`
    const mainBody = (document.querySelector('.main__body').innerHTML = '')
  } catch {
    console.log('Все окей')
  }
}
