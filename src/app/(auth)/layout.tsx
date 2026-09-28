const layout = ({ children }: LayoutProps<"/">) => {
    return (
        <div className="bg-white text-black min-h-screen">
            Topbar
            {children}
        </div>
    );
};

export default layout;