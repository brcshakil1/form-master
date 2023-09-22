import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex" >
                <Cousin name='Rubaiya'/>
                <Cousin name='Rafiqul'/>
            </section>

        </div>
    );
};

export default Uncle;