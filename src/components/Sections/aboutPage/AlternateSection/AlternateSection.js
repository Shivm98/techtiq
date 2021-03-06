import React from 'react'
import Underline from '../../../Underline/Underline';
import Styles from './AlternateSection.module.scss';
import MonitoringSolutionsImg from '../../../../assets/aboutpage/images/about-monitoring-solutions.png';
import UniqueSolutionsImg from '../../../../assets/aboutpage/images/about-unique-solutions.png';
import AgilityImg from '../../../../assets/aboutpage/images/about-agility.png';

const AlternateSection = () => {
    return (
        <section className={Styles.AlternateSection}>
            <div className={Styles.Container}>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={MonitoringSolutionsImg} alt="MonitoringSolutionsImg"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Monitoring Solutions​</h2>
                        <Underline/>
                        <p>
                            Monitoring Solutions​ Fully automated, AI-assisted observability across your Azure environment. A single pane for your cloud platforms, allowing you to monitor the health of your entire Azure infrastructure.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={UniqueSolutionsImg} alt="MonitoringSolutionsImg"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Unique Solutions​</h2>
                        <Underline/>
                        <p>
                            There are variety of solutions for a variety of business challenges. We ensure that our clients adopt solutions that are cost-effective, robust and provide faster ROI.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={AgilityImg} alt="MonitoringSolutionsImg"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Agility</h2>
                        <Underline/>
                        <p>
                            Agility We fully understand that requirements may change throughout the lifecycle of a project, this is why we adopt an agile delivery model that allows for a degree of change to deliverables.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AlternateSection
