import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: "14px",
    padding: "20px 32px",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "#ffffff",
  },
  personalInfo: {
    paddingTop: "14px",
    paddingBottom: "8px",
  },
  name: {
    textAlign: "center",
    fontSize: "22px",
    lineHeight: "32px",
    marginBottom: "2px",
  },
  jobTitle: {
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "28px",
    marginBottom: "6px",
  },
  table: {
    width: "80%",
    margin: "auto",
    borderStyle: "none",
  },
  tableRow: {
    fontSize: "12px",
    textAlign: "center",
  },
  tableData: {
    width: "33.3333%",
    paddingVertical: "0px",
  },
  tdBorderRight: {
    borderRight: "1px solid black",
  },
  marginCenter: {
    margin: "auto"
  },
  legend: {
    fontFamily: "Helvetica",
    backgroundColor: "rgb(30 58 138)",
    textAlign: "center",
    color: "#ffffff",
    marginBottom: "12px",
    padding: "3px",
  },
  summary: {
    textAlign: "justify",
    marginBottom: "6px",
  },
  sectionDiv: {
    marginBottom: "12px",
  },
  upperDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4px",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  list: {
    paddingLeft: "12px",
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
});

export default styles;
