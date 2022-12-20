const buttons = document.querySelectorAll('.buttons')
const url = 'http://localhost:3000/test1'

const handleRequest = async method => {
  try {
    const response = await fetch(url, { method: method })
    return await response.text()
  } catch (error) {
    console.log(error.message)
  }
}

const get = async () => {
  const result = await handleRequest('get')
  console.log(result)
}

const post = async () => {
  const result = await handleRequest('post')
  console.log(result)
}

const put = async () => {
  const result = await handleRequest('put')
  console.log(result)
}

const dlt = async () => {
  const result = await handleRequest('delete')
  console.log(result)
}

buttons[0].addEventListener('click', get)
buttons[1].addEventListener('click', post)
buttons[2].addEventListener('click', put)
buttons[3].addEventListener('click', dlt)