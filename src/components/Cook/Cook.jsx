

const Cook = ({cook}) => {
    return (
        <div className="md:w-1/3">
            <div className="border-2">
                <h2 className="text-xl font-semibold text-center p-5">Want To Cook: {cook.length}</h2>
            </div>
        </div>
    );
};

export default Cook;