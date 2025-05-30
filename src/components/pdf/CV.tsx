import { Document, Page, View, Text, PDFViewer } from "@react-pdf/renderer";
import {Table, TR, TD} from '@ag-media/react-pdf-table';
import styles from "./style.js";

export default function CV({ inputs, educations, experiences }) {
  // Create Document Component
  const CVPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.form}> {/* Form */}
          <View style={styles.personalInfo}> {/* Personal Info */}
            <Text style={[styles.name, styles.textBold]}>{inputs?.fullName || 'Jane Doe'}</Text>
            <Text style={styles.jobTitle}>{inputs.jobTitle || 'Senior Product Designer'}</Text>
            <Table style={styles.table}>
              <TR style={styles.tableRow}>
                  <TD style={[styles.tableData, styles.tdBorderRight]}><Text style={styles.marginCenter}>{inputs.emailAddress || 'janedoe@gmail.com'}</Text></TD>
                  <TD style={[styles.tableData, styles.tdBorderRight]}><Text style={styles.marginCenter}>{inputs.mobile || '+880 123 606 7415'}</Text></TD>
                  <TD style={styles.tableData}><Text style={styles.marginCenter}>{inputs.city || 'San Francisco'}, {inputs.country || 'USA'}</Text></TD>
              </TR>
            </Table>
          </View> 

          <View> {/* Summary */}
            <Text style={styles.legend}>SUMMARY</Text>
            <Text style={styles.summary}>{inputs.summary || 'I am a Senior Product designer at CreativeMinds, creating meaningful, user-centered experiences. With a decade of design experience and a passion for pushing the boundaries of design. I design products that are not only beautiful but also functional and profitable.'}</Text>
          </View> 

          <View> {/* Education */}
            <Text style={styles.legend}>EDUCATION</Text>
            {educations.map((item) => (
              <View key={item.id} style={styles.sectionDiv}>
                <View style={styles.upperDiv}>
                  <Text style={[styles.textUppercase, styles.textBold]}>{item.educationInstitute || 'Brown University'}</Text>
                  <Text style={styles.textBold}>{item.educationLocation || 'Rhode Island, USA'}</Text>
                </View>

                <View style={styles.upperDiv}>
                  <View>
                    <Text style={styles.textBold}>{item.educationDegree || 'Bachelor of Industrial Design'}, {item.educationGrade || 'CGPA 3.70 / 4.00'}</Text>
                  </View>

                  <View>
                    <Text style={styles.textBold}>{item.eduStartDate || 'Aug 2011'} - {item.eduEndDate || 'May 2015'}</Text>
                  </View>
                </View>

                <View style={styles.list}>
                  {item.eduDescList.map((desc) => (
                    <Text key={desc.id}>{"\u2022  " + (desc.text || "")}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <View> {/* Work Experience */}
            <Text style={styles.legend}>EXPERIENCE</Text>
            {experiences.map((item) => (
              <View key={item.id} style={styles.sectionDiv}>
                <View style={styles.upperDiv}>
                  <Text style={[styles.textBold, styles.textUppercase]}>{item.companyName || 'CreativeMinds'}</Text>
                  <Text style={[styles.textBold]}>{item.companyLocation || 'San Francisco, USA'}</Text>
                </View>

                <View style={styles.upperDiv}>
                  <View>
                    <Text style={styles.textBold}>{item.companyRole || 'Senior Product Designer'}, {item.jobType || 'Full-time'}</Text>
                  </View>

                  <View>
                    <Text style={styles.textBold}>{item.expStartDate || 'June 2021'} - {item.expEndDate || 'Present'}</Text>
                  </View>
                </View>

                <View style={styles.list}>
                  {item.expDescList.map((desc) => (
                    <Text key={desc.id}>{"\u2022  " + (desc.text || "")}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="max-w-2xl mx-auto my-10">
      <div className="w-full h-[29.7cm]">
        <PDFViewer key={Date.now()} width="100%" height="100%">
          <CVPDF />
        </PDFViewer>
      </div>
    </div>
  );
};