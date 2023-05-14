import TeacherCard from "../../components/TeacherCard";
import { useDatabaseStore } from "../../stores/useDatabaseStore";



const UserMainPage = () => {

    const TeachersList = useDatabaseStore((state) => state.Announcements);
    
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center my-8">Teacher's Offers</h1> {/* Title */}
                {TeachersList.map((teacher) => (
                    <TeacherCard teacher={teacher} />
                ))}
            </div>
        </div>
    );
}

export default UserMainPage;