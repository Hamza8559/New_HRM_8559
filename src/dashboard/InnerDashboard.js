import React from 'react'
import Header from '../components/Includes/Header'
import EmpSalaryDepart from './InnerDashboard/Tables/EmpSalaryDepart'
import EmpFeedBack from './InnerDashboard/Tables/EmpFeedBack'
import EmpTraining from './InnerDashboard/Tables/EmpTraining'
import { Select, Space } from 'antd';
import './InnerDashboard/css/index.css'
import StackedChart from './InnerDashboard/Charts/StackedBar'
import PieChart from './InnerDashboard/Charts/PieCharts';
import StackedVerticleChart from './InnerDashboard/Charts/StackedVerticleChart';
import NiddlePie1 from './InnerDashboard/Charts/NiddlePie1';
import NiddlePie2 from './InnerDashboard/Charts/NiddlePie2';
import NiddlePie3 from './InnerDashboard/Charts/NiddlePie3';
import NiddlePie4 from './InnerDashboard/Charts/NiddlePie4';
import { CiCircleInfo } from "react-icons/ci";
import HorizontalCharts from './InnerDashboard/Charts/HorizontalCharts';
import HorizontalCharts2 from './InnerDashboard/Charts/HorizontalCharts2'
import { BiSolidDoughnutChart } from "react-icons/bi";


const InnerDashboard = () => {


  const options = [
    { value: "All", label: "All" },
    { value: "Administration", label: "Administration" },
    { value: "Finance", label: "Finance" },
    { value: "Sale", label: "Sale" },
    { value: "IT", label: "IT" },
    { value: "Human Resource", label: "Human Resource" },
    { value: "Marketing", label: "Marketing" },
    { value: "Customer Support", label: "Customer Support" },
  ];
//   for (let i = 10; i < 36; i++) {
//     options.push({
//       value: i.toString(36) + i,
//       label: i.toString(36) + i,
//     });
//   }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Header />

      <section style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className='col-lg-4 chartbox'>
              <div className='d-flex'>
                <div className='chartSelection col-6'>
                  <span className='selectionHeading'>Departments</span>
                  <Select
                    mode="tags"
                    style={{
                      width: '100%',
                      marginTop: "10px"
                    }}
                    onChange={handleChange}
                    tokenSeparators={[',']}
                    options={options}
                  />
                </div>
                <div className='chartSelection col-6'>
                  <h6 className='selectionHeading'>Employees</h6>
                  <Select
                    mode="tags"
                    style={{
                      width: '100%',
                      marginTop: "10px"
                    }}
                    onChange={handleChange}
                    tokenSeparators={[',']}
                    options={options}
                  />
                </div>
              </div>
              <div className=' StackedChart '>
                <span className='selectionHeading'>Employees by Age group</span>
                <StackedChart />
              </div>
            </div>
            <div className='col-lg-4 chartbox'>
              <div className='StackedChart '>
                  <span className='selectionHeading'>Employees by Status</span>
                  <p className='para text-center'><BiSolidDoughnutChart  /> ACTIVE</p>
                <PieChart />
              </div>
            </div>
            <div className='col-lg-4 chartbox'>
              <div className='col-12 StackedChart '>
                <span className='selectionHeading'>Employees by Age group</span>
                <StackedVerticleChart />
              </div>
            </div>
            <div className='col-lg-3 mt-3 chartbox'>
              <div className='StackedChart '>
                <span className='selectionHeading'>Employee Retention Rate <CiCircleInfo /></span>
                <NiddlePie1 />
              </div>
            </div>
            <div className='col-lg-3 mt-3 chartbox'>
              <div className='StackedChart '>
                <span className='selectionHeading'>Employee Net Promoter Score (NPS)<CiCircleInfo /></span>
                <NiddlePie2 />
              </div>
            </div>
            <div className='col-lg-3 mt-3 chartbox'>
              <div className='StackedChart '>
                <span className='selectionHeading'>Employee Turnover Ratio<CiCircleInfo /></span>
                <NiddlePie3 />
              </div>
            </div>
            <div className='col-lg-3 mt-3 chartbox'>
              <div className='StackedChart'>
                <span className='selectionHeading'>Absentee Rate<CiCircleInfo /></span>
                <NiddlePie4 />
              </div>
            </div>
            <EmpSalaryDepart />
            <div className='col-lg-6 mt-3 chartbox'>
              <div className='StackedChart '>
                <span className='selectionHeading'>Productivity Rate by Department</span>
                <HorizontalCharts2 />
              </div>
            </div>
            <div className='col-lg-6 mt-3 chartbox'>
              <div className='StackedChart'>
                <span className='selectionHeading'>Overall Labor Effectiveness (OLE)</span>
                <HorizontalCharts />
              </div>
            </div>
            <EmpFeedBack />
            <EmpTraining />
          </div>
        </div>
      </section>
    </>
  )
}

export default InnerDashboard