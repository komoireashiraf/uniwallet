'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <div className="p-5 flex justify-between items-center border shadow-sm">
            {/* Logo */}
            <div className="flex items-center">
                <Image src="/path-to-logo.png" alt="UniWallet Logo" width={50} height={50} />
                <span className="ml-2 font-bold text-lg">UniWallet</span>
            </div>

            {/* Navigation or Actions */}
            <div>
                {isSignedIn ? (
                    <>
                        <Button>Button 1</Button>
                        <Button>Button 2</Button>
                        <UserButton />
                    </>
                ) : (
                    <span>Please sign in</span>
                )}
            </div>
        </div>
    );
}

export default Header;
