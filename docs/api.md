# API Contracts

```yaml
paths:
  /api/tickets:
    get:
      summary: List all tickets
      responses:
        '200':
          description: Array of tickets
    post:
      summary: Create a new ticket
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Ticket'
      responses:
        '201':
          description: Ticket created
  /api/tickets/{id}:
    get:
      summary: Get ticket by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Ticket details
```
