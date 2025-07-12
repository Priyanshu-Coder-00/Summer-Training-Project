// Versioned Document Tracker using Stack-Based Undo-Redo Simulation
#include <iostream>
#include <stack>
#include <string>
using namespace std;
class VersionedDocument {
private:
    string currentContent;
    stack<string> undoStack;
    stack<string> redoStack;

public:
    // Insert new text and store previous version in undo stack
    void insertText(const string& newText) {
        undoStack.push(currentContent);
        while (!redoStack.empty()) redoStack.pop();
        currentContent += newText + "\n";
        cout << "Text inserted.\n";
    }

    // Delete last line from the document
    void deleteLastLine() {
        undoStack.push(currentContent);
        while (!redoStack.empty()) redoStack.pop();

        size_t lastNewLine = currentContent.find_last_of('\n');
        if (lastNewLine != string::npos) {
            size_t secondLastNewLine = currentContent.find_last_of('\n', lastNewLine - 1);
            if (secondLastNewLine != string::npos)
                currentContent = currentContent.substr(0, secondLastNewLine + 1);
            else
                currentContent = "";
            cout << "Last line deleted.\n";
        } else {
            cout << "Document is already empty.\n";
        }
    }

    // Undo the last operation
    void undo() {
        if (!undoStack.empty()) {
            redoStack.push(currentContent);
            currentContent = undoStack.top();
            undoStack.pop();
            cout << "Undo successful.\n";
        } else {
            cout << "Nothing to undo.\n";
        }
    }

    // Redo the previously undone operation
    void redo() {
        if (!redoStack.empty()) {
            undoStack.push(currentContent);
            currentContent = redoStack.top();
            redoStack.pop();
            cout << "Redo successful.\n";
        } else {
            cout << "Nothing to redo.\n";
        }
    }

    // Display current version of the document
    void display() {
        cout << "\n--- Current Document ---\n";
        cout << (currentContent.empty() ? "[Empty Document]\n" : currentContent);
        cout << "------------------------\n";
    }
};

int main() {
    VersionedDocument doc;
    int choice;
    string text;

    while (true) {
        cout << "\n1. Insert Text\n2. Delete Last Line\n3. Undo\n4. Redo\n5. Display\n6. Exit\nEnter choice: ";
        cin >> choice;
        cin.ignore();

        switch (choice) {
            case 1:
                cout << "Enter text: ";
                getline(std::cin, text);
                doc.insertText(text);
                break;
            case 2:
                doc.deleteLastLine();
                break;
            case 3:
                doc.undo();
                break;
            case 4:
                doc.redo();
                break;
            case 5:
                doc.display();
                break;
            case 6:
                cout << "Exiting...\n";
                return 0;
            default:
                cout << "Invalid option.\n";
        }
    }
}
