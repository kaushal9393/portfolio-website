export const caseStudies = {
  "SmartGodown.in — Smart Inventory Management": {
    problem: "Local warehouses lacked an efficient, automated way to track real-time stock across multiple locations, relying heavily on manual entry which led to inconsistencies.",
    role: "Full-Stack Developer — Led the complete technical architecture and development from frontend UI to backend API and database design.",
    architecture: [
      "Next.js/TypeScript for a performant, type-safe frontend dashboard.",
      "FastAPI backend for high-speed API responses.",
      "PostgreSQL to ensure strong relational integrity and transaction-safe stock updates across multiple warehouses."
    ],
    snippets: [
      {
        filename: "stockTransaction.py",
        code: `
@router.post("/transactions")
async def create_stock_transaction(
    tx: TransactionCreate, 
    db: Session = Depends(get_db)
):
    # Ensure transaction-safe stock updates
    with db.begin():
        product = db.query(Product).with_for_update().get(tx.product_id)
        if product.stock < tx.quantity and tx.type == "OUT":
            raise HTTPException(status_code=400, detail="Insufficient stock")
            
        product.stock += tx.quantity if tx.type == "IN" else -tx.quantity
        new_tx = Transaction(**tx.dict())
        db.add(new_tx)
        
    return {"status": "success", "new_stock": product.stock}
        `
      }
    ]
  }
};
