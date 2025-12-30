// Storage service to handle localStorage operations
// This will be replaced with API calls later

export const saveCounter = (value) => {
  try {
    localStorage.setItem('counterValue', value.toString())
    return true
  } catch (error) {
    console.error('Error saving counter:', error)
    return false
  }
}

export const loadCounter = () => {
  try {
    const savedValue = localStorage.getItem('counterValue')
    return savedValue !== null ? parseInt(savedValue) : 0
  } catch (error) {
    console.error('Error loading counter:', error)
    return 0
  }
}