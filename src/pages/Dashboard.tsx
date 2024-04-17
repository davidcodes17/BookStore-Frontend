import { Box, Heading } from "@chakra-ui/react"
import HeaderSideNavLayout from "../layouts/HeaderSideNavLayout"
import DashboardLayout from "../layouts/DashboardLayout"
import MobileHeader from "../components/MobileHeader"

const Dashboard = () => {
  return (
    <Box>
        <HeaderSideNavLayout />
        <DashboardLayout />
        <MobileHeader />
    </Box>
  )
}

export default Dashboard