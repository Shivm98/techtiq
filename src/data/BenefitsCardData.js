import Lightweight from '../assets/cloudnativeapplicationpage/images/lightweight.svg';
import DevelopedWithBestOfBreedLanguages from '../assets/cloudnativeapplicationpage/images/developed-with-best-of-breed.svg';
import DesignedAsLooselyCoupledMicroservices from '../assets/cloudnativeapplicationpage/images/designed-as-loosely-coupled-microservices.svg';
import CenteredAroundAPIs from '../assets/cloudnativeapplicationpage/images/cenetered-aroud-apis.svg';
import StatelessAndStatefulServices from '../assets/cloudnativeapplicationpage/images/stateless-and-stateful-services.svg';
import IsolatedFromOsAndEnvironmentDependency from '../assets/cloudnativeapplicationpage/images/isolated-from-os-and-environment-dependency.svg';
import Elastic from '../assets/cloudnativeapplicationpage/images/elastic.svg';
import ManagedThroughDevOps from '../assets/cloudnativeapplicationpage/images/managed-through-devops.svg';
import AutomatedCapabilities from '../assets/cloudnativeapplicationpage/images/automated-capabilities.svg';
import DefinedPolicyDrivenSourceAlloacation from '../assets/cloudnativeapplicationpage/images/defined-policy-driven-source-alloacation.svg';

const benefits = [
    {
        img: Lightweight,
        title: 'Lightweight',
        desc: 'Cloud-native applications are a collection of independent and autonomous services that are packaged as lightweight containers.'
    },
    {
        img: DevelopedWithBestOfBreedLanguages,
        title: 'Developed with best-of-breed languages',
        desc: 'Each service of a cloud-native application is developed using the language and framework best suited for the functionality.'
    },
    {
        img: DesignedAsLooselyCoupledMicroservices,
        title: 'Designed as loosely coupled microservices',
        desc: 'Services that belong to the same application discover each other through the application runtime.'
    },
    {
        img: CenteredAroundAPIs,
        title: 'Centered around APIs',
        desc: 'Cloud-native services use lightweight APIs that are based on protocols.'
    },
    {
        img: StatelessAndStatefulServices,
        title: 'Stateless and Stateful services',
        desc: 'Services that are persistent and durable follow a different pattern that assures higher availability and resiliency.'
    },
    {
        img: IsolatedFromOsAndEnvironmentDependency,
        title: 'Isolated from OS and Environment Dependency',
        desc: 'Cloud-native applications don’t have an affinity for any particular operating system or individual machine. They operate at a higher abstraction level.'
    },
    {
        img: Elastic,
        title: 'Elastic',
        desc: 'Cloud-native applications are deployed on virtual, shared and elastic infrastructure.'
    },
    {
        img: ManagedThroughDevOps,
        title: 'Managed through DevOps',
        desc: 'Each service of a cloud-native application goes through an independent life cycle, which is managed through an agile DevOps process.'
    },
    {
        img: AutomatedCapabilities,
        title: 'Automated Capabilities',
        desc: 'Cloud-native applications can be highly automated. They play well with the concept of infrastructure as code.'
    },
    {
        img: DefinedPolicyDrivenSourceAlloacation,
        title: 'Defined, policy-driven resource allocation',
        desc: 'Cloud-native applications align with the governance model defined through a set of policies.'
    },
]


export default benefits;