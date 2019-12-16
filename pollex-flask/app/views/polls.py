from flask import Blueprint, request, jsonify
from flask_cors import cross_origin

polls_module = Blueprint('polls', __name__, url_prefix='/polls')

@polls_module.route('', methods=['GET'])
@cross_origin()
def get_polls():
    try:
        token = request.json['token']

        return jsonify({"polls": [
            {
                "poll_id": 0,
                "name": "test poll",
                "poll_owner": "a",
                "votes_number": 3,
                "total_votes": 5,
                "created_date": "2019-11-21"
            },
            {
                "poll_id": 1,
                "name": "test poll 2",
                "poll_owner": "ba",
                "votes_number": 2,
                "total_votes": 15,
                "created_date": "2011-01-01"
            },
        ]})

    except:
        return jsonify({"message": "expected a json with token"}), 400

@polls_module.route('/<int:poll_id>')
@cross_origin()
def get_poll(poll_id):
    try:
        token = request.json['token']

        # here we are supposed to get the poll from the database
        # poll = db.findPollById(poll_id)

        # but for now let's define a testing poll
        poll = jsonify({
                "poll_id": 0,
                "name": "test get poll",
                "poll_owner": "a",
                "votes_number": 5,
                "total_votes": 13,
                "created_date": "2019-11-24"
        })
        return poll
    except:
        return jsonify({"message": "expected a json with token"}), 400


@polls_module.route('/<int:poll_id>', methods=['UPDATE'])
@cross_origin()
def update_poll(poll_id):
    try:
        token = request.json['token']

        # Update the poll

        # Return the updated poll
        poll = {
                "poll_id": 0,
                "name": "test get poll",
                "poll_owner": "a",
                "votes_number": 5,
                "total_votes": 13,
                "created_date": "2019-11-24"
        }
        return jsonify(poll)
    except:
        return jsonify({"message": "unable to update poll"}), 400

      
@polls_module.route('/<int:poll_id>/vote', methods=['POST'])
@cross_origin()
def register_vote(poll_id):
    try:
        token = request.json['token']
        option = request.json['option']
        # register vote

        return jsonify(None), 204
    except:
        return jsonify({"message": "expected a json with token and option"}), 400

