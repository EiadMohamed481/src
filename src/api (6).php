<?php
$servername = "localhost";
$username = "Eyad";
$password = "1234";
$dbname = "crm";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Create an associative array to represent the response data


// Set the Content-Type header to indicate JSON response
header('Content-Type: application/json');




// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Allow requests from your React application (http://localhost:3000)
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Handle OPTIONS request (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if a "table" parameter is provided in the URL
    if (isset($_GET['table']) & isset($_GET['action_type'])) {
        if (isset($_GET['username'])) {
        error_log($_GET['action_type']);
        $tableName = $_GET['table'];
        $userName = $_GET['username'];

        // Check if the provided table name is a child of "fresh_lead"
        $isFreshLeadChild = isChildTable($conn, $tableName, 'fresh_lead');

        // Check if the provided table name is a child of "direct_lead"
        $isDirectLeadChild = isChildTable($conn, $tableName, 'direct_lead');

        if ($isFreshLeadChild) {
            // Construct the SQL query to perform the join with "fresh_lead"
            $sql = "SELECT f.*, i.* FROM fresh_lead AS f
                    LEFT JOIN $tableName AS i ON f.id = i.id
                    WHERE f.send_to = $userName";
                    error_log($sql);
        } elseif ($isDirectLeadChild) {
            // Construct the SQL query to perform the join with "direct_lead"
            $sql = "SELECT d.*, i.* FROM direct_lead AS d
                    LEFT JOIN $tableName AS i ON d.id = i.id
                    WHERE d.send_to = $userName";
                    error_log($sql);
            
        } else {
            $sql = "SELECT * FROM $tableName
                    WHERE send_to = '$userName' ";
                    error_log($sql);
        }

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            // Set the Content-Type header to indicate JSON response
            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            echo "No records found.";
        }}
        else if ($_GET['action_type'] == "admin") {
            $tableName = $_GET['table'];
    
            // Check if the provided table name is a child of "fresh_lead"
            $isFreshLeadChild = isChildTable($conn, $tableName, 'fresh_lead');
    
            // Check if the provided table name is a child of "direct_lead"
            $isDirectLeadChild = isChildTable($conn, $tableName, 'direct_lead');
    
            if ($isFreshLeadChild) {
                // Construct the SQL query to perform the join with "fresh_lead"
                $sql = "SELECT f.*, i.* FROM fresh_lead AS f
                        LEFT JOIN $tableName AS i ON f.id = i.id";
                        error_log($sql);
            } elseif ($isDirectLeadChild) {
                // Construct the SQL query to perform the join with "direct_lead"
                $sql = "SELECT d.*, i.* FROM direct_lead AS d
                        LEFT JOIN $tableName AS i ON d.id = i.id";
                        error_log($sql);
                
            } else {
                $sql = "SELECT * FROM $tableName";
            }
    
            $result = $conn->query($sql);
    
            if ($result->num_rows > 0) {
                $data = [];
                while ($row = $result->fetch_assoc()) {
                    $data[] = $row;
                }
                // Set the Content-Type header to indicate JSON response
                header('Content-Type: application/json');
                echo json_encode($data);
            } else {
                echo "No records found.";
            }
        }

    } else {
        echo "Table name not provided.";
    }
}
// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $data = json_decode(file_get_contents('php://input'));
    error_log(json_encode($data));

    // Log the POST data for debugging purposes
    if (isset($data->action_type)) {
        if ($data->action_type == "get_username") {
        error_log("data");
    $query1 = "SELECT MAX(time) FROM login_history";
    $result1 = $conn->query($query1)->fetch_row()[0];
    $query2 = "SELECT username FROM login_history WHERE time = '$result1'";
    $result2 = $conn->query($query2)->fetch_row()[0];
    $response = array(
        "username" => $result2,
);
    echo json_encode($response);
    }  else if ($data->action_type == "send_username") {
        $query6 = "INSERT INTO login_history (`username`) VALUES ($data->username)";
        error_log($query6);
        $conn->query($query6);
    }
}


    // Check if both username and password are provided
    elseif (isset($data->username) && isset($data->password)) {
    if (isset($data->user_type)) {
        if ($data->action == "ADD") {
            $query = "INSERT INTO users (`username`, `password`, `status`) VALUES ('$data->username', '$data->password', '$data->user_type')";
            $conn->query($query);

        }
        else if ($data->action == "REMOVE") {
            $query = "DELETE FROM users WHERE username = '$data->username'";
            error_log($query);
            $conn->query($query);
        }
    } 
    else {
    $escapedUsername = $conn->real_escape_string($username);

    // Query to retrieve the user's record from the database
    $query = "SELECT * FROM users WHERE username = '$escapedUsername'";

    // Execute the query
    $result = $conn->query($query);

    if ($result) {
        // Check if a record with the provided username exists
        if ($result->num_rows > 0) {
            // Fetch the user's record
            $user = $result->fetch_assoc();
            
            // Verify the password (you should hash and salt the passwords in production)
            if ($password === $user['password']) {
                $response = array(
                    "status" => "success",
                    "message" => "Authentication successful",
                    "user_status" => $user['status'],
            );
                error_log(json_encode($response));
                $query3 = "INSERT INTO login_history (`username`) VALUES ('$user[username]')";
                $conn->query($query3);
                echo json_encode($response);
            }
            else {
                echo "Authentication failed.";
            }
        }
    }}}
    
            

        
    
    elseif (isset($data->first_name)) {
        if (isset($data->action)) {
        if ($data->action == "ADD") {
            $query = "INSERT INTO  $data->customers_type (`first_name`, `last_name`, `country`, `city`, `zip_code`, `phone_number`,`phone_number_2`, `email`, `notes`, `send_to`) VALUES ('$data->first_name','$data->last_name','$data->country','$data->city','$data->zip_code','$data->phone_number','$data->phone_number_2','$data->email', '$data->notes', '$data->send_to')";
            error_log($query);
            $conn->query($query);
            $query1 = "SELECT * FROM $data->customers_type WHERE phone_number = '$data->phone_number'";
            $result = $conn->query($query1);
            $result1 = $result->fetch_assoc();
            $query2 = "INSERT INTO  $data->customers_type$data->interesting (`id`) VALUES ('$result1[id]')";
            $conn->query($query2);
            $query3 = "INSERT INTO  $data->customers_type$data->Answering (`id`) VALUES ('$result1[id]')";
            $conn->query($query3);
        }
        elseif ($data->action == "EDIT") {
            error_log(json_encode($data));
            $query = "UPDATE $data->customers_type SET `first_name`='$data->first_name',
            `country`='$data->country',
             `city`='$data->city',
              `phone_number`= '$data->phone_number',
              `send_to` = '$data->send_to' WHERE id = '$data->id'";
              error_log($query);
              $conn->query($query);
            if ($data->zip_code != "") {
                $query1 = "UPDATE $data->customers_type SET `zip_code` = '$data->zip_code' WHERE id = $data->id";
                $conn->query($query1);
                error_log($query1);
            }
            if ($data->email != "") {
                $query2 = "UPDATE $data->customers_type SET `email` = '$data->email' WHERE id = $data->id"; 
                $conn->query($query2);
                error_log($query2);
            }
            if ($data->notes != "") {
                $query3 = "UPDATE $data->customers_type SET `notes` = '$data->notes' WHERE id = $data->id"; 
                $conn->query($query3);
                error_log($query3);
            }
            $interested = "_interested_customers";
            $notInterested = "_not_interested_customers";
            $answer = "_amswer_customers";
            $noAnswer = "_no_answer_customers";
            $query4 = "SELECT FROM $data->customers_type$interested WHERE id = $data->id";
            $query5 = "SELECT FROM $data->customers_type$notInterested WHERE id = $data->id";
            $query8 = "SELECT FROM $data->customers_type$answer WHERE id = $data->id";
            $query9 = "SELECT FROM $data->customers_type$noAnswer WHERE id = $data->id";
            $result = $conn->query($query4);
            $result1 = $conn->query($query5);
            $result2 = $conn->query($query8);
            $result3 = $conn->query($query9);
            if ($result->num_rows < 0 ) {
                $query6 = "INSERT INTO  $data->customers_type$interested (`id`) VALUES ($data->id)";
                $query7 = "DELETE FROM $data->customers_type$notInterested WHERE id  = $data->id";
                $conn->query($query6);
                $conn->query($query7);
            }
            elseif ($result1->num_rows < 0 ) {
                $query6 = "INSERT INTO  $data->customers_type$notInterested (`id`) VALUES ($data->id)";
                $query7 = "DELETE FROM $data->customers_type$interested WHERE id  = $data->id";
                $conn->query($query6);
                $conn->query($query7);
            }
            if ($result2->num_rows < 0 ) {
                $query6 = "INSERT INTO  $data->customers_type$answer (`id`) VALUES ($data->id)";
                $query7 = "DELETE FROM $data->customers_type$noAnswer WHERE id  = $data->id";
                $conn->query($query10);
                $conn->query($query11);
            }
            elseif ($result3->num_rows < 0 ) {
                $query6 = "INSERT INTO  $data->customers_type$noAnswer (`id`) VALUES ($data->id)";
                $query7 = "DELETE FROM $data->customers_type$answer WHERE id  = $data->id";
                $conn->query($query10);
                $conn->query($query11);
            }
        }
        elseif ($data->action == "REMOVE") {
            $doneDeal = '_done_deal_customers';
            $meetings = '_meetings_customers';
            $reservations = '_reservations_customers';
            $visits = '_visits_customers';
            $followUp = '_follow_up_customers';
            $query = "DELETE FROM $data->customers_type WHERE id  = $data->id";
            $query1 = "DELETE FROM $data->customers_type$data->interesting WHERE id  = $data->id";
            $query2 = "DELETE FROM $data->customers_type$data->Answering WHERE id  = $data->id";
            $query3 = "DELETE FROM $data->customers_type$followUp WHERE id  = $data->id";
            $query4 = "DELETE FROM $data->customers_type$visits WHERE id  = $data->id";
            $query5 = "DELETE FROM $data->customers_type$reservations WHERE id  = $data->id";
            $query6 = "DELETE FROM $data->customers_type$meetings WHERE id  = $data->id";
            $query7 = "DELETE FROM $data->customers_type$doneDeal WHERE id  = $data->id";
            $conn->query($query);
            $conn->query($query1);
            $conn->query($query2);
            $conn->query($query3);
            $conn->query($query4);
            $conn->query($query5);
            $conn->query($query6);
            $conn->query($query7);
        }
    }
        elseif (isset($data->user_action)) {
            if ($data->user_action == "ADD") {
                $query = "INSERT INTO  $data->customers_type (`first_name`, `last_name`, `country`, `city`, `zip_code`, `phone_number`, `email`, `comments`, `send_to`) VALUES ('$data->first_name','$data->last_name','$data->country','$data->city','$data->zip_code','$data->phone_number','$data->email', '$data->comments', '$data->send_to')";
                error_log($query);
                $conn->query($query);
                $query1 = "SELECT * FROM $data->customers_type WHERE phone_number = '$data->phone_number'";
                $result = $conn->query($query1);
                $result1 = $result->fetch_assoc();
                $query2 = "INSERT INTO  $data->customers_type$data->interesting (`id`) VALUES ('$result1[id]')";
                $conn->query($query2);
                $query3 = "INSERT INTO  $data->customers_type$data->Answering (`id`) VALUES ('$result1[id]')";
                $conn->query($query3);
                if ($data->follow_up) {
                    $followUp = '_follow_up_customers';
                    $query4 = "INSERT INTO  $data->customers_type$followUp (`id`) VALUES ('$result1[id]')";
                    error_log($query4);
                    $conn->query($query4);
                };
                if ($data->visits) {
                    $visits = '_visits_customers';
                    $query5 = "INSERT INTO  $data->customers_type$visits (`id`) VALUES ('$result1[id]')";
                    error_log($query5);
                    $conn->query($query5);
                };
                if ($data->reservations) {
                    $reservations = '_reservations_customers';
                    $query6 = "INSERT INTO  $data->customers_type$reservations (`id`) VALUES ('$result1[id]')";
                    error_log($query6);
                    $conn->query($query6);
                };
                if ($data->meetings) {
                    $meetings = '_meetings_customers';
                    $query7 = "INSERT INTO  $data->customers_type$meetings (`id`) VALUES ('$result1[id]')";
                    error_log($query7);
                    $conn->query($query7);
                };
                if ($data->done_deal) {
                    $doneDeal = '_done_deal_customers';
                    $query8 = "INSERT INTO  $data->customers_type$doneDeal (`id`) VALUES ('$result1[id]')";
                    error_log($query8);
                    $conn->query($query8);
                };
                
    
            }
            elseif ($data->user_action == "EDIT") {
                error_log(json_encode($data));
                $query = "UPDATE $data->customers_type SET `first_name`='$data->first_name',
                `country`='$data->country',
                 `city`='$data->city',
                  `phone_number`= '$data->phone_number' WHERE id = '$data->id' AND send_to = '$data->send_to' ";
                  error_log($query);
                  $conn->query($query);
                if ($data->zip_code != "") {
                    $query1 = "UPDATE $data->customers_type SET `zip_code` = '$data->zip_code' WHERE id = $data->id AND send_to = '$data->send_to' ";
                    $conn->query($query1);
                    error_log($query1);
                }
                if ($data->email != "") {
                    $query2 = "UPDATE $data->customers_type SET `email` = '$data->email' WHERE id = $data->id AND send_to = '$data->send_to' "; 
                    $conn->query($query2);
                    error_log($query2);
                }
                if ($data->comments != "") {
                    $query3 = "UPDATE $data->customers_type SET `comments` = '$data->comments' WHERE id = $data->id AND send_to = '$data->send_to' "; 
                    $conn->query($query3);
                    error_log($query3);
                }
                $interested = "_interested_customers";
                $notInterested = "_not_interested_customers";
                $answer = "_amswer_customers";
                $noAnswer = "_no_answer_customers";
                $query4 = "SELECT FROM $data->customers_type$interested WHERE id = $data->id AND send_to = '$data->send_to' ";
                $query5 = "SELECT FROM $data->customers_type$notInterested WHERE id = $data->id AND send_to = '$data->send_to' ";
                $query8 = "SELECT FROM $data->customers_type$answer WHERE id = $data->id AND send_to = '$data->send_to' ";
                $query9 = "SELECT FROM $data->customers_type$noAnswer WHERE id = $data->id AND send_to = '$data->send_to' ";
                $result = $conn->query($query4);
                $result1 = $conn->query($query5);
                $result2 = $conn->query($query8);
                $result3 = $conn->query($query9);
                if ($result->num_rows < 0 ) {
                    $query6 = "INSERT INTO  $data->customers_type$interested (`id`) VALUES ($data->id)";
                    $query7 = "DELETE FROM $data->customers_type$notInterested WHERE id  = $data->id";
                    $conn->query($query6);
                    $conn->query($query7);
                }
                elseif ($result1->num_rows < 0 ) {
                    $query6 = "INSERT INTO  $data->customers_type$notInterested (`id`) VALUES ($data->id)";
                    $query7 = "DELETE FROM $data->customers_type$interested WHERE id  = $data->id";
                    $conn->query($query6);
                    $conn->query($query7);
                }
                if ($result2->num_rows < 0 ) {
                    $query6 = "INSERT INTO  $data->customers_type$answer (`id`) VALUES ($data->id)";
                    $query7 = "DELETE FROM $data->customers_type$noAnswer WHERE id  = $data->id";
                    $conn->query($query10);
                    $conn->query($query11);
                }
                elseif ($result3->num_rows < 0 ) {
                    $query6 = "INSERT INTO  $data->customers_type$noAnswer (`id`) VALUES ($data->id)";
                    $query7 = "DELETE FROM $data->customers_type$answer WHERE id  = $data->id";
                    $conn->query($query10);
                    $conn->query($query11);
                }
                if ($data->follow_up) {
                    $followUp = "_follow_up_customers";
                    $query12 = "SELECT FROM $data->customers_type$followUp WHERE id = $data->id AND send_to = '$data->send_to' ";
                    $result4 = $conn->query($query12);
                    if ($result4->num_rows < 0) {
                        $query13 ="INSERT INTO  $data->customers_type$followUp (`id`) VALUES ($data->id)";
                        $conn->query($query13);
                    }
                }
                else {
                    $followUp = "_follow_up_customers";
                    $query14 ="DELETE FROM $data->customers_type$followUp WHERE id  = $data->id AND send_to = '$data->send_to' ";
                    $conn->query($query14);
                }
    
                if ($data->reservations) {
                    $reservations = "_reservations_customers";
                    $query15 = "SELECT FROM $data->customers_type$reservations WHERE id = $data-> AND send_to = '$data->send_to' ";
                    $result5 = $conn->query($query12);
                    if ($result5->num_rows < 0) {
                        $query16 ="INSERT INTO  $data->customers_type$reservations (`id`) VALUES ($data->id)";
                        $conn->query($query16);
                    }
                }
                else {
                    $reservations = "_reservations_customers";
                    $query17 ="DELETE FROM $data->customers_type$reservations WHERE id  = $data->id AND send_to = '$data->send_to' ";
                    $conn->query($query17);
                }
    
                if ($data->visits) {
                    $visits = "_visits_customers";
                    $query17 = "SELECT FROM $data->customers_type$visits WHERE id = $data->id AND send_to = '$data->send_to' ";
                    $result6 = $conn->query($query12);
                    if ($result6->num_rows < 0) {
                        $query18 ="INSERT INTO  $data->customers_type$visits (`id`) VALUES ($data->id)";
                        $conn->query($query18);
                    }
                }
                else {
                    $visits = "_visits_customers";
                    $query19 ="DELETE FROM $data->customers_type$visits WHERE id  = $data->id AND send_to = '$data->send_to' ";
                    $conn->query($query19);
                }
    
                if ($data->meetings) {
                    $meetings = "_meetings_customers";
                    $query20 = "SELECT FROM $data->customers_type$meetings WHERE id = $data->id AND send_to = '$data->send_to' ";
                    $result7 = $conn->query($query12);
                    if ($result6->num_rows < 0) {
                        $query21 ="INSERT INTO  $data->customers_type$meetings (`id`) VALUES ($data->id)";
                        $conn->query($query21);
                    }
                }
                else {
                    $meetings = "_meetings_customers";
                    $query21 ="DELETE FROM $data->customers_type$meetings WHERE id  = $data->id AND send_to = '$data->send_to' ";
                    $conn->query($query21);
                }
    
                if ($data->done_deal) {
                    $done_deal = "_done_deal_customers";
                    $query22 = "SELECT FROM $data->customers_type$done_deal WHERE id = $data->id AND send_to = '$data->send_to' ";
                    $result8 = $conn->query($query12);
                    if ($result8->num_rows < 0) {
                        $query23 ="INSERT INTO  $data->customers_type$done_deal (`id`) VALUES ($data->id)";
                        $conn->query($query23);
                    }
                }
                else {
                    $done_deal = "_done_deal_customers";
                    $query24 ="DELETE FROM $data->customers_type$done_deal WHERE id  = $data->id AND send_to = '$data->send_to' ";
                    $conn->query($query24);
                }
                
                
            }
            elseif ($data->user_action == "REMOVE") {
                $doneDeal = '_done_deal_customers';
                $meetings = '_meetings_customers';
                $reservations = '_reservations_customers';
                $visits = '_visits_customers';
                $followUp = '_follow_up_customers';
                $query = "DELETE FROM $data->customers_type WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query1 = "DELETE FROM $data->customers_type$data->interesting WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query2 = "DELETE FROM $data->customers_type$data->Answering WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query3 = "DELETE FROM $data->customers_type$followUp WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query4 = "DELETE FROM $data->customers_type$visits WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query5 = "DELETE FROM $data->customers_type$reservations WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query4 = "DELETE FROM $data->customers_type$meetings WHERE id  = $data->id AND send_to = '$data->send_to' ";
                $query5 = "DELETE FROM $data->customers_type$doneDeal WHERE id  = $data->id AND send_to = '$data->send_to' ";
            }
        }
    }
    else {
        echo "Username and password not provided.";
    }
}

// Function to authenticate the user in the same database
function isChildTable($conn, $childTableName, $parentTableName) {
    $sql = "SELECT COUNT(*) as count
            FROM information_schema.key_column_usage
            WHERE REFERENCED_TABLE_NAME = '$parentTableName'
            AND TABLE_NAME = '$childTableName'";

    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return intval($row['count']) > 0;
    }
    return false;
}

$conn->close();
?>