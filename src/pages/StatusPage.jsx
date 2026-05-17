import Status from '../components/Dashborad/Status/Status'
import Breadcrumb from '../components/Dashborad/UI/Breadcrumb';
function StatusPage({title}){
    return (
        <>
        <Breadcrumb title={title}/>
        <Status/>
        </>
    )
}
export default StatusPage; 