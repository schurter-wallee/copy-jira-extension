(() => {
    function showMessage(message, type = "info") {
        const existingMessage = document.getElementById("jira-issue-copier-message");
        if (existingMessage) existingMessage.remove();

        const messageElement = document.createElement("div");
        messageElement.id = "jira-issue-copier-message";
        messageElement.textContent = message;
        messageElement.style.position = "fixed";
        messageElement.style.bottom = "20px";
        messageElement.style.right = "20px";
        messageElement.style.backgroundColor = type === "error" ? "#f44336" : "#4caf50";
        messageElement.style.color = "#fff";
        messageElement.style.padding = "10px 15px";
        messageElement.style.borderRadius = "5px";
        messageElement.style.boxShadow = "0 2px 4px rgba(0,0,0,0.3)";
        messageElement.style.zIndex = "10000";
        messageElement.style.fontFamily = "Arial, sans-serif";

        document.body.appendChild(messageElement);

        setTimeout(() => {
            if (messageElement) messageElement.remove();
        }, 3000);
    }

    function getJiraIssueNumber() {
        const url = window.location.href;
        const regex = /(?:\/browse\/|\/issues\/|[\?&]selectedIssue=)([A-Z]+-\d+)/;
        const match = url.match(regex);

        return match ? match[1] : null;
    }

    function isJiraPage() {
        const url = window.location.href;
        return url.includes(".atlassian.net") || url.includes(".jira.com");
    }

    if (!isJiraPage()) {
        showMessage("You are not on a Jira page.", "error");
        return;
    }

    const issueNumber = getJiraIssueNumber();

    if (issueNumber) {
        if (document.hasFocus()) {
            navigator.clipboard.writeText(issueNumber).then(() => {
                showMessage(`Copied: ${issueNumber}`);
            }).catch(() => {
                showMessage("Failed to copy Jira issue number.", "error");
            });
        } else {
            showMessage("Click anywhere on the page to focus and try again.", "error");
        }
    } else {
        showMessage("Select a Jira issue and try again.", "error");
    }
})();
