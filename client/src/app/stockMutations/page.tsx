"use client"
import React from 'react';
import StockMutations from '../components/stockMutations';


const StockMutationsPage = () => {
    return (
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold mb-4">Stock Mutation Management</h1>
                <StockMutations />
            </div>
    );
};

export default StockMutationsPage;
