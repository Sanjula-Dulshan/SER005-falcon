import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  Alert,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CustomCard from "../../components/CustomCard";
import CustomButton from "../../components/CustomButton/CustomButton";
import axios from "axios";
import constants from "../../constants/constants";
import warning from "../../../assets/images/warning.png";

const UsersDashboardScreen = () => {
  const [newUsers, setNewUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [approveModalVisible, setApproveModalVisible] = useState(false);
  const [declineModalVisible, setDeclineModalVisible] = useState(false);
  const [viewModalVisible, setViewModalVisible] = useState(false);

  useEffect(() => {
    axios.get(constants.backend_url + "/user/new").then((res) => {
      setNewUsers(res.data);
    });
  }, [newUsers]);

  const onApproveYesPressed = () => {
    userDetails.approvalStatus = "Approve";

    try {
      axios
        .put(constants.backend_url + "/user/approve", userDetails)
        .then((res) => {
          console.log(res.data.msg);
          console.log("res.data.user", res.data.user);
          setApproveModalVisible(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const onDeclineYesPressed = () => {
    userDetails.approvalStatus = "Decline";
    console.log("userDetails", userDetails);
    try {
      axios
        .put(constants.backend_url + "/user/approve", userDetails)
        .then((res) => {
          console.log(res.data.msg);
          console.log("res.data.user", res.data.user);
          setDeclineModalVisible(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const approvePressed = (data) => {
    setApproveModalVisible(true);
    setUserDetails(data);
  };

  const declinePressed = (data) => {
    setDeclineModalVisible(true);
    setUserDetails(data);
  };

  const viewPressed = (data) => {
    setViewModalVisible(true);
    setUserDetails(data);
  };
  const requestProof = () => {
    console.log("_id: ", userDetails._id);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {newUsers.map((user, index) => {
            return (
              <View style={styles.container} key={index}>
                <View style={styles.card}>
                  <View style={styles.textWrap}>
                    <View style={styles.textContainer}>
                      <Text style={styles.textTitle}>Name:</Text>
                      <Text style={styles.text}>{user.name}</Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textTitle}>Email:</Text>
                      <Text style={styles.text}>{user.email}</Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textTitle}>Role:</Text>
                      <Text style={styles.text}>{user.role}</Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textTitle}>Contact:</Text>
                      <Text style={styles.text}>{user.mobile}</Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainer}>
                    <CustomButton
                      title="Approve"
                      text="Approve"
                      bgColor="#EEB815"
                      fgColor={"white"}
                      type={"approve"}
                      onPress={handleSubmit(() => approvePressed(user))}
                    />
                    <CustomButton
                      title="Decline"
                      text="Decline"
                      bgColor="#ffffff"
                      fgColor="#F40000"
                      type={"decline"}
                      onPress={handleSubmit(() => declinePressed(user))}
                    />
                    <CustomButton
                      title="View"
                      text="View"
                      bgColor="#ffffff"
                      fgColor="#EEB815"
                      type={"view"}
                      onPress={handleSubmit(() => viewPressed(user))}
                    />
                  </View>
                </View>
              </View>
            );
          })}

          {/* pop up modal for approve */}
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={approveModalVisible}
                onRequestClose={() => {
                  setApproveModalVisible(!approveModalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image source={warning} />
                    <Text style={[styles.modalText, { marginBottom: 25 }]}>
                      Are you want to approve ?
                    </Text>
                    <View style={styles.alertButtonContainer}>
                      <Pressable
                        style={styles.warningBtnYes}
                        onPress={onApproveYesPressed}
                      >
                        <Text style={[styles.modalText, { color: "#ffffff" }]}>
                          Yes
                        </Text>
                      </Pressable>
                      <Pressable
                        style={styles.warningBtnNo}
                        onPress={() =>
                          setApproveModalVisible(!approveModalVisible)
                        }
                      >
                        <Text style={[styles.modalText, { color: "#FBBC05" }]}>
                          No
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>

          {/* pop up modal for View */}
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={declineModalVisible}
                onRequestClose={() => {
                  setDeclineModalVisible(!declineModalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Image source={warning} />
                    <Text style={[styles.modalText, { marginBottom: 25 }]}>
                      Are you want to reject ?
                    </Text>
                    <View style={styles.alertButtonContainer}>
                      <Pressable
                        style={styles.declineBtnYes}
                        onPress={onDeclineYesPressed}
                      >
                        <Text style={[styles.modalText, { color: "#ffffff" }]}>
                          Yes
                        </Text>
                      </Pressable>
                      <Pressable
                        style={styles.declineBtnNo}
                        onPress={() =>
                          setDeclineModalVisible(!declineModalVisible)
                        }
                      >
                        <Text style={[styles.modalText, { color: "#FBBC05" }]}>
                          No
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>

          {/* pop up modal for decline */}
          <View style={styles.centeredView}>
            <View style={styles.modalContainer}>
              <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={viewModalVisible}
                onRequestClose={() => {
                  setViewModalVisible(!viewModalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text
                      style={[
                        styles.modalText,
                        { marginBottom: 25, textDecorationLine: "underline" },
                      ]}
                    >
                      Registration Details
                    </Text>
                    <View style={{ marginBottom: 30 }}>
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Name:</Text>
                        <Text style={styles.text}>{userDetails.name}</Text>
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Username:</Text>
                        <Text style={styles.text}>{userDetails.username}</Text>
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Email:</Text>
                        <Text style={styles.text}>{userDetails.email}</Text>
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Contact no:</Text>
                        <Text style={styles.text}>{userDetails.mobile}</Text>
                      </View>
                      <View style={styles.textContainer}>
                        <Text style={styles.textTitle}>Account type:</Text>
                        <Text style={styles.text}>{userDetails.role}</Text>
                      </View>
                    </View>
                    <View style={styles.alertButtonContainer}>
                      <Pressable
                        style={styles.viewBtnYes}
                        onPress={requestProof}
                      >
                        <Text
                          style={[styles.viewModalText, { color: "#ffffff" }]}
                        >
                          Request proof
                        </Text>
                      </Pressable>
                      <Pressable
                        style={styles.viewBtnNo}
                        onPress={() => setViewModalVisible(!viewModalVisible)}
                      >
                        <Text style={[styles.modalText, { color: "#FBBC05" }]}>
                          Cancel
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#E4E4E4",
    height: "100%",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 100,
  },

  card: {
    width: 350,
    marginVertical: 20,
    marginBottom: 1,
    marginLeft: "4%",
    marginRight: "4%",
    height: "auto",
    paddingBottom: 15,

    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",

    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textWrap: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "row",

    marginHorizontal: "2%",
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000aa",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "auto",
    width: "80%",
  },
  modalContainer: {
    // backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    backgroundColor: "red",
  },
  modal: {
    background: "red",
    position: "absolute",
    top: "50px",
    right: "calc(50% - 200px)",
    border: "1px solid #ccc",
    padding: "1px",
    minHeight: "300px",
  },
  warningBtnYes: {
    backgroundColor: "#FBBC05",
    elevation: 7,
    width: "100%",
    height: 60,
    maxWidth: 100,
    padding: 15,
    paddingStart: 20,
    borderRadius: 25,
  },
  warningBtnNo: {
    backgroundColor: "#FEFFDC",
    borderColor: "#FBBC05",
    borderWidth: 2,
    elevation: 7,
    width: "100%",
    height: 60,
    marginLeft: 75,
    maxWidth: 100,
    padding: 15,
    paddingStart: 25,
    borderRadius: 25,
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 22,
    height: 30,
  },
  alertButtonContainer: {
    flexDirection: "row",
  },

  declineBtnYes: {
    backgroundColor: "#EC5959",
    elevation: 7,
    width: "100%",
    height: 60,
    maxWidth: 100,
    padding: 15,
    paddingStart: 20,
    borderRadius: 25,
  },
  declineBtnNo: {
    backgroundColor: "#FEFFDC",
    borderColor: "#FBBC05",
    borderWidth: 2,
    elevation: 7,
    width: "100%",
    height: 60,
    marginLeft: 75,
    maxWidth: 100,
    padding: 15,
    paddingStart: 25,
    borderRadius: 25,
  },

  viewBtnYes: {
    backgroundColor: "#FBBC05",
    elevation: 7,
    width: 300,
    height: 60,
    maxWidth: 100,
    paddingTop: 8,
    paddingStart: 20,
    borderRadius: 25,
  },
  viewBtnNo: {
    backgroundColor: "#FEFFDC",
    borderColor: "#FBBC05",
    borderWidth: 2,
    elevation: 7,
    width: "100%",
    height: 60,
    marginLeft: 75,
    maxWidth: 100,
    padding: 15,

    paddingStart: 10,
    borderRadius: 25,
  },
  viewModalText: {
    fontWeight: "bold",
    fontSize: 20,
    height: 50,
  },
});
export default UsersDashboardScreen;
