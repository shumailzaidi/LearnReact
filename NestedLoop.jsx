import React from 'react'

function NestedLoop() {
    const uni = [
        {
            uniName: 'Delhi University',
            city: 'Delhi',
            email: 'Delhigmail.com',
            course: 
            
        },
        {
            uniName: '  Dr A.P.J Abdul Kalam University',
            city: 'Laknow',
            email: 'AKTUgmail.com',

        },
        {
            uniName: 'Chandigard University',
            city: 'Chandigard',
            email: 'chandigardgmail.com',

        };
        
    ]

    return (
        <div>
            <h1> List of universities</h1>
            {

                uni.map((uni, index) => (
                    < div key={index} style={{

                        backgroundColor: '#0cc',
                        padding: '20px',
                        margin: '20px',
                        borderRadius: '5px',
                        borderBottom: '4px solid black',
                        width: "700px"
                    }}>
                        <h1>Name: <span style={{ color: 'blue' }}> {uni.uniName}</span></h1>
                        <h1>City: <span style={{ color: 'blue' }}> {uni.city}</span></h1>
                        <h1>Email: <span style={{ color: 'blue' }}> {uni.email}</span></h1>

                    </div>
                ))
            }

        </div>
    )
}

export default NestedLoop;