import React from 'react'
import Styles from './ImplementationSection.module.scss';
import Kubernetes from '../../../../assets/cloudnativeapplicationpage/images/kubernetes.svg';
import ContainerInstances from '../../../../assets/cloudnativeapplicationpage/images/container-instances.png';
import AzureServiceFabric from '../../../../assets/cloudnativeapplicationpage/images/azure-services.png';
import ContainerRegistry from '../../../../assets/cloudnativeapplicationpage/images/container-registries.jpg';

const ImplementationSection = () => {
    return (
        <section className={Styles.ImplementationSection}>
            <h2 className={Styles.Title}>Ways it can be implemented​</h2>
            <div className={Styles.Container}>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={Kubernetes} alt="Kubernetes"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Kubernetes​</h2>
                          <div className={Styles.Underline}></div>
                        <p>
                            Open-source container-orchestration system for automating computer application deployment, scaling, and management.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={ContainerInstances} alt="ContainerInstances"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Container Instances</h2>
                        <div className={Styles.Underline}></div>
                        <p>
                            Easily run containers on Azure without managing servers.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={AzureServiceFabric} alt="AzureServiceFabric"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Azure Service Fabric</h2>
                        <div className={Styles.Underline}></div>
                        <p>
                           Azure Service Fabric is a distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable micro services and containers.
                        </p>
                    </div>
                </div>
                <div className={Styles.Article}>
                    <div className={Styles.ImgContainer}>
                        <img src={ContainerRegistry} alt="ContainerRegistry"/>
                    </div>
                    <div className={Styles.Content}>
                        <h2>Container Registry</h2>
                        <div className={Styles.Underline}></div>
                        <p>
                           Store your customized docker images in the Azure container registry and make it available to be deployed at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImplementationSection;
