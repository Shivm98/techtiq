import React from 'react'
import Styles from './DemoSection.module.scss';
import CrossPlatformScreenshot from '../../../../assets/mobileappdevpage/images/CrossPlatformScreenshot.png';
import ApplicationFramework from '../../../../assets/mobileappdevpage/images/ApplicationFramework.svg';
import MVVM from '../../../../assets/mobileappdevpage/images/MVVM.svg';
import UIComponentEcosystemM from '../../../../assets/mobileappdevpage/images/UIComponentEcosystem.svg';

const DemoSection = () => {
    return (
        <section className={Styles.DemoSection}>
            <div className={Styles.Container}>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={CrossPlatformScreenshot} alt="CrossPlatformScreenshot"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Build stunning cross-platform user interfaces</h2>
                        <div className={Styles.Underline}></div>                        
                        <p>
                           Use Xamarin.Forms built in pages, layouts, and controls to build and design mobile apps from a single API that is highly extensible. Subclass any control to customize their behavior or define your own controls, layouts, pages, and cells to make your app pixel perfect.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={ApplicationFramework} alt="Application Framework"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Application Framework​</h2>
                        <div className={Styles.Underline}></div>                        <p>
                            Xamarin.Forms is more than just a cross-platform UI library, it is a full application framework that includes everything you need to build mobile apps. This includes cross-platform navigation, animation APIs, dependency service, messaging center, and more.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={MVVM} alt="Model-View-ViewModel (MVVM)"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Model-View-ViewModel (MVVM)</h2>
                        <div className={Styles.Underline}></div>                        <p>
                           MVVM is a design pattern used to decouple user-interface (view), data (model), and application logic (view model). Xamarin has built-in support for the MVVM pattern including data binding, making it easy to follow this design pattern so that you can create application code that’s better tested and easier to extend without requiring radical changes.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={UIComponentEcosystemM} alt="UI component ecosystem"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>UI component ecosystem</h2>
                        <div className={Styles.Underline}></div>                        <p>
                          Get productive fast with re-usable UI components from top component vendors like Syncfusion, DevExpress, UX Divers, GrapeCity, Telerik, and others.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemoSection;

