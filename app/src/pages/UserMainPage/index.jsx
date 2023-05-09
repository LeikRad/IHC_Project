import TeacherCard from "../../components/TeacherCard";

const UserMainPage = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center my-8">Teacher's Offers</h1> {/* Title */}
                <TeacherCard />
            </div>
        </div>
    );
}

export default UserMainPage;