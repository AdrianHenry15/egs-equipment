"use client";

import { useEffect, useState } from "react";

type AdminState = {
    isAdmin: boolean;
    isSignedIn: boolean;
};

export function useAdmin() {
    const [state, setState] = useState<AdminState>({
        isAdmin: false,
        isSignedIn: false,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        fetch("/api/admin")
            .then((res) => res.json())
            .then((data) => {
                if (!mounted) return;

                setState({
                    isAdmin: Boolean(data.isAdmin),
                    isSignedIn: Boolean(data.isSignedIn),
                });
                setLoading(false);
            })
            .catch(() => {
                if (!mounted) return;

                setState({ isAdmin: false, isSignedIn: false });
                setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, []);

    return {
        isAdmin: state.isAdmin,
        isSignedIn: state.isSignedIn,
        loading,
    };
}
