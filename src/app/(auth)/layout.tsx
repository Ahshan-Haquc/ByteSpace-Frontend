const layout = ({ children }: LayoutProps<"/">) => {
    return (
        <div className="bg-white text-black min-h-screen">
            {children}
        </div>
    );
};

export default layout;