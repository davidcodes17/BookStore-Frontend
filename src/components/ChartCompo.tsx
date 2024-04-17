import { Box, Text } from "@chakra-ui/react"
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line, Bar, Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const ChartCompo = () => {
  return (
    <Box height={250} bg={"#fff"} p={5} borderRadius={20}>
    <Text>Monthly Users </Text>
    <Box width={"100%"} height={"200px"}>
      <Doughnut
        data={{
          labels: ["A", "B", "c"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 300, 400],
              backgroundColor: ["#00CDAC", "#FF6F67", "#FFDACD"],
              borderRadius: 10,
            },
            {
              label: "Loss",
              data: [90, 50, 30],
              backgroundColor: ["#C05780", "#FF828A", "#FF828A"],
              borderRadius: 10,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 1.5,
            },
          },
        }}
      />
    </Box>
  </Box>
  )
}

export default ChartCompo