module.exports = (res, error = false) => {
  if (error) return {
    error,
    message: res.message,
    data: []
  }

  return {
    error,
    message: '',
    data: res
  }
}