import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";

const WalletScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [CardNum,setCardNum] = useState("");
  const checkinput = () => {
    if(CardNum.length>16){
      alert('กรุณาใส่เลขบัตรให้ถูกต้อง')
    }
    else if(CardNum.length<16){
      alert('กรุณาใส่เลขบัตรให้ถูกต้อง')
    }
    else{
      setShowModal(!showModal)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Modal animationType={"slide"} transparent={false} visible={showModal}>
          <View style={styles.addcardcontainer}>
            <Text>ใส่หมายเลขบัตรเครดิต</Text>
            <TextInput
            onChangeText={(CardNum)=>{
              setCardNum(CardNum);
            }}
              style={{
                textAlign: "center",
                borderWidth: 2,
                borderColor: "rgba(0,0,0,0.2)",
                margin: 10,
              }}
              placeholder='หมายเลขบัตร'
            />
            <TouchableOpacity
              style={styles.addcardtouch}
              onPress={checkinput}
            >
              <Text style={styles.addcardtext}>ยืนยัน</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity>
          <View style={styles.contentcontaintop}>
            <Text style={styles.texttop}>ยอดเงินคงเหลือบัญชี TC</Text>
            <Text style={styles.balance}>
              <b>฿0.00</b>
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.addcard}>
          <View style={styles.Credit}>
            <Text>เพิ่มบัตรเดบิต/เครดิต</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchAdd}
            onPress={() => setShowModal(!showModal)}
          >
            <Text>เพิ่มบัตร</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.contentcontainbot}>
            <Text style={styles.textbot}>Credit Card</Text>
            <Text style={styles.textbot}>{CardNum.substring(12,16)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 5,
  },
  contentcontaintop: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    margin: 10,
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
  },
  addcard: {
    flexDirection: "row",
  },
  Credit: {
    marginLeft: 10,
    marginRight: 150,
  },
  TouchAdd: {
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "#FFF",
    borderRadius: 100,
    padding: 3,
  },
  contentcontainbot: {
    justifyContent:"space-between",
    backgroundColor: "#00008B",
    margin: 10,
    padding: 10,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(0,0,0,0.2)",
  },
  texttop: {
    fontSize: 13,
  },
  balance: {
    fontSize: 40,
    marginTop: 30,
  },
  textbot: {
    color: "#FFFFFF",
  },
  addcardcontainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  addcardtouch: {
    backgroundColor: "#00008B",
    padding: 7,
    borderRadius: 10,
  },
  addcardtext: {
    color: "#FFFFFF",
  },
});
