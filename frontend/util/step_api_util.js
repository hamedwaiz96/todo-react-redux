export const fetchSteps = (todo_id) => (
    $.ajax(
        {
            url: `/api/todos/${todo_id}/steps`,
            method: 'GET'
        }
    )
)

export const createStep = (todo_id, step) => (
    $.ajax({
        url: `/api/todos/${todo_id}/steps`,
        method: 'POST',
        data: step
    })
)

export const updateStep = (step) => (
    $.ajax({
        url: `/api/steps/${step.id}`,
        method: 'PATCH',
        data: { step }
    })
)

export const deleteStep = (step) => (
    $.ajax({
        url: `/api/steps/${step.id}`,
        method: 'DELETE'
    })
)