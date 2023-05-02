import { StyleSheet, Text, View } from "react-native";
import Register from "./pages/register";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Home from "./pages/home";
import Loading from "./pages/loading";
import Secure from "./pages/secure";
import Send from "./pages/send";
import ScanQR from "./pages/scanQR";
import EnterAmount from "./pages/enterAmount";
import Report from "./pages/report";
import Receive from "./pages/receive";
import Navigation from "./components/navigation/navigation";
import Transactions from "./pages/transactions";
import Exchange from "./pages/exchange";
import Payroll from "./pages/payroll";
import Employee from "./pages/employee";
import AddEmployee from "./pages/addEmployee";
import Wallet from "./pages/wallet";
import Profile from "./pages/profile";
import UserManagment from "./pages/userManagment";
import AddUser from "./pages/addUser";
import KYC from "./pages/kyc";
import Request from "./pages/request";

export default function Page() {
  return (
    <View style={styles.container}>
      <Request />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
  },
});
