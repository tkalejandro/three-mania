import { useTheme } from "@chakra-ui/react"

/**
 * Here we can manange colors
 * of multiple texts and background
 * from different files
 * @returns
 */
const useColorManagement = () => {
  const theme = useTheme()
  let loadingBackgroundColor = theme.colors.primary.main

  return {
    loadingBackgroundColor
  }

}

export default useColorManagement;